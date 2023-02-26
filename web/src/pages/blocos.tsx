import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BlocksAreaHeader } from '../components/BlocksPageHeader'

import styles from '../styles/blocksPage.module.scss'
import prismaClient from '../lib/prisma'

interface getServerSidePropsQuery {
	estado?: string,
	nome?: string
}

interface Block {
	state: string,
	name: string,
	id: string,
	imageName: string,
	description: true
}


const Home: NextPage = (props) => {

	const { query } = useRouter()

	const { blocks } = props as { blocks: Block[] }


	return (
		<div id={styles.container}>
			<BlocksAreaHeader
				optionName="Blocos recomendados"
				enableToggleContainer={true}
				buttonName="PUBLICAR BLOCO"
				buttonLink="/publicar-bloco"
			/>
			<main>
				{
					blocks.length >= 1 ? (

						blocks.map((block) => {
							return (
								<Link
									key={block.id}

									href={`/blocos/${block.id}`}
								>
									<div
										className={styles.blockCard}
									>

										<img
											src={`/uploads/${block.imageName}`}
											alt="O python do vovo não sobe mais"
											className={styles.blockBanner}
										/>
										<div className={styles.blockContent}>

											<h1>
												{block.name}
											</h1>
											<p>{block.description}</p>
											<div className={styles.blockLocation}>
												<img
													src="/location.png"
													alt="Icone de localização"
												/>
												<p>{block.state}</p>
											</div>
										</div>
									</div>
								</Link>
							)
						})
					) : (
						<div id={styles.noBlocksContainer}>
							<img
								src="/sad.png"
							/>
							<h1>Sem festas por hoje... </h1>
							<p>Não foi encontrado nenhum bloco <span>{query.nome && `"${query.nome}"`} {query.estado && `em ${query.estado}`} </span></p>

						</div>
					)
				}
			</main>
		</div>
	)
}

export default Home


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
			description: true
		}
	})

	return {
		props: {
			blocks: blocks
		}
	}
}