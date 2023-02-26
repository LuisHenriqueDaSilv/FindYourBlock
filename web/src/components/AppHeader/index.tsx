import { FormEvent, useState } from 'react'

import styles from './styles.module.scss'

import states from '../../../datas/states.json'
import { useRouter } from 'next/router'

export function AppHeader() {

    const router = useRouter()

    const [blockState, setBlockState] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [position, setPosition] = useState({lat: -15.7993786, lng: -47.8654648})

    function handleSelectState(event: React.ChangeEvent<HTMLSelectElement>){

        if(!event.target.value){
            setBlockState('')
            setPosition({lat: -15.7993786, lng: -47.8654648})
            return 
        }
        const [lat, lng, state, uf] = event.target.value.split('/')

        setBlockState(`${state}-${uf}`)
        setPosition({lat:Number(lat), lng:Number(lng)})
    }

    function handleSubmitSearch(event: FormEvent){
        event.preventDefault()
        const pathToSearch = router.pathname.includes('/blocos/mapa')? ('/blocos/mapa')
        : (
            '/blocos'
        )

        router.push(`${pathToSearch}?estado=${blockState}&nome=${name}&lat=${position.lat}&lng=${position.lng}`)

    }

    


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
                    onSubmit={handleSubmitSearch}
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
                            onChange={handleSelectState}
                        >
                            <option value="">Selecione uma cidade</option>
                            {
                                states.map((state) => {
                                    return (
                                        <option
                                            value={`${state.latitude}/${state.longitude}/${state.name}/${state.uf}`}
                                            key={state.name}
                                        >
                                            {`${state.name}-${state.uf}`}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <button
                        id={styles.submitButton}
                        type="submit"
                    >BUSCAR AGORA</button>
                </form>
            </div>
        </div>
    )
}