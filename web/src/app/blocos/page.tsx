import Image from 'next/image'
import styles from './blocksListStyles.module.scss'

import { BlocksAreaHeader } from '../../components/BlocksAreaHeader'

export default function BlocksList() {
    return (
        <div id={styles.container}>
            <BlocksAreaHeader
                optionName="Blocos recomendados"
                enableToggleContainer={true}
                buttonName="PUBLICAR BLOCO"
                buttonLink="/publicar-bloco"
            />

            <main>
                <div className={styles.blockCard}>
                    <Image
                        src="/banner.jpg"
                        alt="O python do vovo não sobe mais"
                        className={styles.blockBanner}
                        width={1000}
                        height={600}
                    />
                    <div className={styles.blockContent}>

                        <h1>
                            O python do vovo não sobe mais
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                        <div className={styles.blockLocation}>
                            <Image
                                src="/location.png"
                                alt="Icone de localização"
                                height={24}
                                width={24}
                            />
                            <p>São paulo-SP</p>
                        </div>
                    </div>
                </div>
                <div className={styles.blockCard}>
                    <Image
                        src="/banner.jpg"
                        alt="O python do vovo não sobe mais"
                        className={styles.blockBanner}
                        width={1000}
                        height={600}
                    />
                    <div className={styles.blockContent}>

                        <h1>
                            O python do vovo não sobe mais
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                        <div className={styles.blockLocation}>
                            <Image
                                src="/location.png"
                                alt="Icone de localização"
                                height={24}
                                width={24}
                            />
                            <p>São paulo-SP</p>
                        </div>
                    </div>
                </div>
                <div className={styles.blockCard}>
                    <Image
                        src="/banner.jpg"
                        alt="O python do vovo não sobe mais"
                        className={styles.blockBanner}
                        width={1000}
                        height={600}
                    />
                    <div className={styles.blockContent}>

                        <h1>
                            O python do vovo não sobe mais
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                        <div className={styles.blockLocation}>
                            <Image
                                src="/location.png"
                                alt="Icone de localização"
                                height={24}
                                width={24}
                            />
                            <p>São paulo-SP</p>
                        </div>
                    </div>
                </div>
                <div className={styles.blockCard}>
                    <Image
                        src="/banner.jpg"
                        alt="O python do vovo não sobe mais"
                        className={styles.blockBanner}
                        width={1000}
                        height={600}
                    />
                    <div className={styles.blockContent}>

                        <h1>
                            O python do vovo não sobe mais
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                        <div className={styles.blockLocation}>
                            <Image
                                src="/location.png"
                                alt="Icone de localização"
                                height={24}
                                width={24}
                            />
                            <p>São paulo-SP</p>
                        </div>
                    </div>
                </div>
                <div className={styles.blockCard}>
                    <Image
                        src="/banner.jpg"
                        alt="O python do vovo não sobe mais"
                        className={styles.blockBanner}
                        width={1000}
                        height={600}
                    />
                    <div className={styles.blockContent}>

                        <h1>
                            O python do vovo não sobe mais
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa libero magnam ex enim dolores a. Reprehenderit ea ullam eum.</p>
                        <div className={styles.blockLocation}>
                            <Image
                                src="/location.png"
                                alt="Icone de localização"
                                height={24}
                                width={24}
                            />
                            <p>São paulo-SP</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}