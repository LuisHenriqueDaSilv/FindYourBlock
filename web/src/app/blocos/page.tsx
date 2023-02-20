import Image from 'next/image'

import prismaClient from '@/lib/prisma'

import styles from './blocksListStyles.module.scss'

interface BlocksListParams {
    searchParams: {
        estado: string,
        nome: string
    }
}
export default async function BlocksList({ searchParams }: BlocksListParams) {

    const blocks = await prismaClient.carnivalBlock.findMany({
        orderBy: {
            createdAt: 'asc'
        },
        where: searchParams.estado !== '' && searchParams.nome !== '' ? {
            state: searchParams.estado,
            name: {
                contains: searchParams.nome
            }
        } : (
            searchParams.estado !== '' ? {
                state: searchParams.estado
            } : (searchParams.nome !== '' ? {
                name: {
                    contains: searchParams.nome
                }
            } : {})
        )
    })

    return (
        <>

            <main>
                {
                    blocks.length >= 1 ? (

                        blocks.map((block) => {
                            return (
                                <div key={block.id} className={styles.blockCard}>
                                    <Image
                                        src={`/uploads/${block.imageName}`}
                                        alt="O python do vovo não sobe mais"
                                        className={styles.blockBanner}
                                        width={1000}
                                        height={600}
                                    />
                                    <div className={styles.blockContent}>

                                        <h1>
                                            {block.name}
                                        </h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                                        <div className={styles.blockLocation}>
                                            <Image
                                                src="/location.png"
                                                alt="Icone de localização"
                                                height={24}
                                                width={24}
                                            />
                                            <p>{block.state}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ): (
                        <div id={styles.noBlocksContainer}>
                            <img
                                src="/sad.png"
                            />
                            <h1>Sem festas por hoje... </h1>
                            <p>Não foi encontrado nenhum bloco <span>{searchParams.nome&& `"${searchParams.nome}"`} {searchParams.estado&& `em ${searchParams.estado}`} </span></p>
                            
                        </div>
                    )
                }
            </main>
        </>
    )
}