"use client"

import Image from 'next/image'
import { BlocksAreaHeader } from '../../components/BlocksAreaHeader'

import styles from './publicarBlocoStyles.module.scss'

export default function PublicarBloco() {
    return (
        <div id={styles.container}>
            <BlocksAreaHeader
                buttonLink='/blocos'
                buttonName='BLOCOS RECOMENDADOS'
                optionName='Publicar bloco'
                enableToggleContainer={false}
            />

            <form>
                <div id={styles.blockTextInfos}>
                    <div className={styles.input}>
                        <img
                            src="/identification.png"
                            alt="Icone de busca"
                        />
                        <input
                            type="text"
                            placeholder="Dê um nome bem divertido ao seu bloco"
                        />
                    </div>

                    <div className={styles.input} id={styles.locationSelect}>
                        <img
                            src="/location.png"
                            alt="Icone de localização"
                        />
                        <select>
                            <option>Selecione a cidade do seu bloco</option>
                            <option value="1">Brasilia-DF</option>
                            <option value="2">São paulo-SP</option>
                            <option value="3">Salvador-PE</option>
                        </select>
                    </div>
                </div>

                <div id={styles.blockImageContainer}>
                    <img
                        src="/image.png"
                        alt="Icone indicando local de imagem"
                    />
                    <p>Solte a imagem do seu bloco aqui ou clique para adicionar uma</p>
                </div>

                <div id={styles.blockLocationContainer}>

                </div>

                <button id={styles.submitBlockButton}>
                    PUBLICAR
                </button>
            </form>
        </div>
    )
}