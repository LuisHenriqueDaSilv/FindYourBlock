"use client"

import { FormEventHandler, useState } from 'react'

import styles from './headerStyles.module.scss'

import states from '@/data/states.json'
import Link from 'next/link'

export function AppHeader() {

    const [blockState, setBlockState] = useState<string>('')
    const [name, setName] = useState<string>('')

    return (
        <div id={styles.container}>
            <img
                src="/bottomHeader.png"
                alt="Imagem carnavalesca"
                id={styles.bottomImage}
                className={styles.backgroundImage}
            />
            <img
                src="/topHeader.png"
                alt="Imagem carnavalesca"
                id={styles.topImage}
                className={styles.backgroundImage}
            />

            <div id={styles.wrapper}>


                <p id={styles.appName}>
                    FIND YOUR BLOCK
                </p>

                <h1 id={styles.title}>
                    Encontre os <span>melhores blocos </span>
                    de carnaval de 2023
                </h1>

                <form  
                    id={styles.searchContainer} 
                    onSubmit={(event) => event.preventDefault()}
                >

                    <div className={styles.input}>
                        <img
                            src="/search.png"
                            alt="Icone de busca"
                        />
                        <input
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            placeholder="Pesquise por nome"
                        />
                    </div>

                    <div className={styles.input} id={styles.locationSelect}>
                        <img
                            src="/location.png"
                            alt="Icone de localização"
                        />
                        <select
                            onChange={(event) => setBlockState(event.target.value)}
                        >
                            <option value="">Selecione uma cidade</option>
                            {
                                states.map((state) => {
                                    return (
                                        <option
                                            value={`${state.name}-${state.uf}`}
                                            key={state.name}
                                        >
                                            {`${state.name}-${state.uf}`}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <Link 
                        href={`${`/blocos?estado=${blockState}&nome=${name}`}`} 
                        id={styles.submitButton}
                    >BUSCAR AGORA</Link>
                </form>
            </div>
        </div>
    )
}