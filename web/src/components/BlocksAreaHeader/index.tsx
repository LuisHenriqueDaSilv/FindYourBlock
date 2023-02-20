"use client"

import Link from 'next/link'
import styles from './BlocksAreaHeader.module.scss'

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
    return (
        <header id={styles.container}>
            <h1 id={styles.title}>{optionName}</h1>

            <Link
                id={styles.changeModeButton}
                href={buttonLink}
            >{buttonName}</Link>

            {
                enableToggleContainer && (
                    <div id={styles.toggleContainer} disabled-data={`${!enableToggleContainer}`}>
                        <button data-state="on" className={styles.toggleMenuItem}>
                            LISTA
                        </button>
                        <button className={styles.toggleMenuItem}>
                            MAPA
                        </button>
                    </div>
                )
            }
        </header>

    )
}