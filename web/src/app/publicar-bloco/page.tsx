"use client"

import { FormEvent, useState, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';

import { BlocksAreaHeader } from '@/components/BlocksAreaHeader'
import { MapPositionMarker, PositionInterface } from '@/components/MapPositionMarker'

import 'leaflet/dist/leaflet.css';
import styles from './publicarBlocoStyles.module.scss'

import states from '@/data/states.json'

export default function PublicarBloco() {

    const descriptionTextArea = useRef(null)

    const [name, setName] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState<File | null>()
    const [position, setPosition] = useState<PositionInterface>({ lat: -15.7993786, lng: -47.8654648 })
    const [description, setDescription] = useState<string>('')

    const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>()

    function updateDescriptionTextArea(event:any){
        setDescription(event.target.value)
        //@ts-ignore
        descriptionTextArea.current.style.height = `${descriptionTextArea.current.scrollHeight}px`
    }

    function handleSelectImage(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0])
            setSelectedImagePreview(URL.createObjectURL(event.target.files[0]));
            event.target.value = '';
        }
    }
    function handleRemoveImage() {
        setSelectedImage(null)
        setSelectedImagePreview(null)
    }

    async function submitPublishBlock(event: FormEvent) {
        event.preventDefault();

        const body = new FormData()
        body.append('name', name)
        body.append('state', state)
        body.append('banner', selectedImage || '')
        body.append('positionLat', String(position.lat))
        body.append('positionLng', String(position.lng))
        body.append('description', description)

        const response = await fetch('/api/publicar-bloco', {
            method: 'POST',
            body
        })

        const responseData = await response.json()

        if(responseData.done == 'ok'){
            alert('🎉Bloco publicado com sucesso!!🎉')
            window.location.replace('/blocos')
        } else {
            alert(`❌${responseData.error}❌`)
        }
    }

    return (
        <div id={styles.container}>
            <BlocksAreaHeader
                buttonLink='/blocos'
                buttonName='BLOCOS RECOMENDADOS'
                optionName='Publicar bloco'
                enableToggleContainer={false}
            />

            <form onSubmit={submitPublishBlock}>
                <div id={styles.blockTextInfos}>
                    <div className={styles.input}>
                        <img
                            src="/identification.png"
                            alt="Icone de busca"
                        />
                        <input
                            onChange={(event) => { setName(event.target.value); }}
                            type="text"
                            placeholder="Dê um nome bem divertido ao seu bloco"
                        />
                    </div>

                    <div className={styles.input} id={styles.locationSelect}>
                        <img
                            src="/location.png"
                            alt="Icone de localização"
                        />
                        <select
                            onChange={(event) => {setState(event.target.value)}}
                        >
                            <option value="">Selecione o estado do seu bloco</option>
                            {
                                states.map((state) => {
                                    return (
                                        <option 
                                            value={`${state.name}-${state.uf}`}
                                            key={state.name}
                                        >{`${state.name}-${state.uf}`}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <textarea 
                    onChange={updateDescriptionTextArea} 
                    id={styles.descriptionTextArea} 
                    placeholder='Descreva o seu bloco'
                    ref={descriptionTextArea}
                />


                <label id={styles.blockImageContainer}>
                    <img
                        id={selectedImagePreview ? styles.imagePreview : ""}
                        src={selectedImagePreview || "/image.png"}
                    />

                    {
                        selectedImagePreview ? (
                            <button
                                id={styles.removeImageButton}
                                onClick={handleRemoveImage}
                            >Remover imagem</button>
                        ) : (
                            <p>Clique para escolher uma imagem</p>
                        )
                    }
                    <input
                        type="file"
                        onInput={handleSelectImage}
                        accept=".png,.jpg,.jpeg,.pjpeg"
                    />
                </label>

                <MapContainer
                    center={[position.lat, position.lng]}
                    zoom={12}
                    id={styles.blockLocationContainer}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapPositionMarker
                        onChange={(position) => { setPosition(position) }}
                        position={position}
                    />
                </MapContainer>

                <button id={styles.submitBlockButton}>
                    PUBLICAR
                </button>
            </form>
        </div>
    )
}