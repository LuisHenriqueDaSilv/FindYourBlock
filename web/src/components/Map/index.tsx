import { MapContainer, TileLayer } from 'react-leaflet'
import { ReactNode } from "react";

import styles from './styles.module.scss'
import 'leaflet/dist/leaflet.css';

interface MapProps {
    children?: ReactNode,
    center: {
        lat: number,
        lng: number
    }
}

export default function Map({ children, center }: MapProps) {
    return (
        <MapContainer
            center={[center.lat, center.lng]}
            zoom={9}
            id={styles.map}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )
}