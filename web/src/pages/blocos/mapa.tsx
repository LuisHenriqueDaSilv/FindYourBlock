
import { BlocksAreaHeader } from '../../components/BlocksPageHeader'
import dynamic from 'next/dynamic';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

import prismaClient from '../../lib/prisma'

import styles from '../../styles/blocksMap.module.scss'

interface getServerSidePropsQuery {
    estado?: string,
    nome?: string
}

interface Block {
    state: string,
    name: string,
    id: string,
    imageName: string,
    description: true,
    positionLat: string,
    positionLng: string
}

const MapPage: NextPage = (props) => {

    const { blocks } = props as { blocks: Block[] }

    const { query }: any = useRouter()

    const Map = dynamic(() => import("../../components/Map"), {
        ssr: false
    });

    const MapMarker = dynamic(() => import("../../components/MapMarker"), {
        ssr: false
    });

    return (
        <div id={styles.container} >
            <BlocksAreaHeader
                optionName="Blocos recomendados"
                enableToggleContainer={true}
                buttonName="PUBLICAR BLOCO"
                buttonLink="/publicar-bloco"
            />
            <div id={styles.mapContainer}>
                <Map
                    center={{ lat: query.lat || -15.7993786, lng: query.lng || -47.8654648 }}
                >
                    {blocks.map((block) => {
                        return (
                            <MapMarker
                                key={block.id}
                                id={block.id}
                                name={block.name}
                                image={`/uploads/${block.imageName}`}
                                position={{ lat: Number(block.positionLat), lng: Number(block.positionLng) }}
                            />
                        )
                    })}
                </Map>
            </div>
        </div>
    )
}

export default MapPage

export async function getServerSideProps({ query }: GetServerSidePropsContext) {

    const { estado, nome } = query as getServerSidePropsQuery


    const blocks = await prismaClient.carnivalBlock.findMany({
        orderBy: {
            createdAt: 'asc'
        },
        where: estado !== '' && nome !== '' ? {
            state: estado,
            name: {
                contains: nome
            }
        } : (
            estado !== '' ? {
                state: estado
            } : (nome !== '' ? {
                name: {
                    contains: nome
                }
            } : {})
        ),
        select: {
            state: true,
            name: true,
            id: true,
            imageName: true,
            description: true,
            positionLat: true,
            positionLng: true
        }
    })

    return {
        props: {
            blocks: blocks
        }
    }
}