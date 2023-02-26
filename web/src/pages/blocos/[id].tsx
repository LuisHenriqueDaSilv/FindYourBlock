import type { GetServerSidePropsContext, NextPage } from "next"
import Link from 'next/link'
import dynamic from 'next/dynamic'

import prismaClient from '../../lib/prisma'

import { BlocksAreaHeader } from '../../components/BlocksPageHeader'


import styles from '../../styles/blockPage.module.scss'

interface GetServerSidePropsQuery {
    id?: string
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

const Block: NextPage = (props) => {

    const Map = dynamic(() => import("../../components/Map"), {
        ssr: false
    });

    const MapMarker = dynamic(() => import("../../components/MapMarker"), {
        ssr: false
    });



    const { block } = props as { block: Block }

    if (!block) {
        return (
            <div id={styles.container}>
                <BlocksAreaHeader
                    optionName="Blocos recomendados"
                    enableToggleContainer={true}
                    buttonName="PUBLICAR BLOCO"
                    buttonLink="/publicar-bloco"
                />
                <h1>Bloco não encontrado</h1>
            </div>
        )
    }

    return (

        <div id={styles.container}>
            <BlocksAreaHeader
                optionName="Blocos recomendados"
                enableToggleContainer={true}
                buttonName="PUBLICAR BLOCO"
                buttonLink="/publicar-bloco"
            />
            <div id={styles.blockInfos}>

                <img src={`/uploads/${block.imageName}`} alt={`Banner do bloco ${block.name}`} />
                <h1>{block.name}</h1>
                <p>{block.description}</p>
                <div id={styles.mapContainer}>
                    <Map
                        center={{ lat: Number(block.positionLat), lng: Number(block.positionLng) }}
                    >
                        <MapMarker
                            position={{ lat: Number(block.positionLat), lng: Number(block.positionLng) }}
                        />
                    </Map>
                </div>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${block.positionLat},${block.positionLng}`}
                >
                    <span id={styles.seeRoutesButton}>Ver rotas no Google Maps</span>
                </Link>
            </div>

        </div>
    )
}
export default Block


export async function getServerSideProps({ query }: GetServerSidePropsContext) {

    const { id } = query as GetServerSidePropsQuery

    const block = await prismaClient.carnivalBlock.findFirst({
        where: {
            id: id
        },
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

    return ({
        props: {
            block
        }
    })
}