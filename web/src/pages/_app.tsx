import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'



function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Blocos | #BoraCodar(7)</title>
			</Head>
			<AppHeader />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
