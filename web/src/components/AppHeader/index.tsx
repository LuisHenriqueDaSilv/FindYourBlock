"use client"

import styles from './headerStyles.module.scss'


export function AppHeader() {

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

                <form id={styles.searchContainer} onSubmit={(event) => { event.preventDefault() }}>

                    <div className={styles.input}>
                        <img 
                            src="/search.png" 
                            alt="Icone de busca" 
                            />
                        <input
                            type="text"
                            placeholder="Pesquise por nome"
                        />
                    </div>

                    <div className={styles.input} id={styles.locationSelect}>
                        <img
                            src="/location.png"
                            alt="Icone de localização"
                        />
                        <select>
                            <option>Selecione uma cidade</option>
                            <option value="1">Brasilia-DF</option>
                            <option value="2">São paulo-SP</option>
                            <option value="3">Salvador-PE</option>
                        </select>
                    </div>

                    <button id={styles.submitButton}>BUSCAR AGORA</button>
                </form>
            </div>
        </div>
    )
}