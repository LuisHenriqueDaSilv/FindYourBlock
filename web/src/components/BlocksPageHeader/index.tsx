import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './styles.module.scss'

interface BlocksAreaHeaderParams {
    optionName: string,
    buttonName: string,
    buttonLink: string,
    enableToggleContainer: boolean
}

export function BlocksAreaHeader({
    optionName,
    enableToggleContainer,
    buttonName,
    buttonLink
}: BlocksAreaHeaderParams) {

    const { pathname, query  } = useRouter()

    function generateQueryString(){
        let queryString= ''
        const keys = Object.keys(query)

        keys.forEach((key) => {
            queryString = `${queryString}${key}=${query[key]}&`
        })

        return queryString
    }


    return (
        <header id={styles.container}>
            <h1 id={styles.title}>{optionName}</h1>

            <Link
                href={buttonLink}
            >
                <span id={styles.changeModeButton}>
                    {buttonName}
                </span>
            </Link>
            {
                enableToggleContainer && (
                    <div id={styles.toggleContainer} disabled-data={`${!enableToggleContainer}`}>

                        <Link
                            href={`/blocos?${generateQueryString()}`}
                            className={styles.toggleMenuItem}
                        >
                            <span
                                className={styles.toggleMenuItem}
                                data-state={pathname == "/blocos" && "on"}
                            >
                                LISTA
                            </span>
                        </Link>

                        <Link
                            href={`/blocos/mapa?${generateQueryString()}`}
                        >
                            <span
                                className={styles.toggleMenuItem}
                                data-state={pathname == "/blocos/mapa" && "on"}
                            >
                                MAPA
                            </span>
                        </Link>

                    </div>
                )
            }
        </header>

    )
}