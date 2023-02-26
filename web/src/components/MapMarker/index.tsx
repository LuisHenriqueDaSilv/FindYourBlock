import { Marker, Popup, useMapEvents } from 'react-leaflet'
import Leaflet from 'leaflet'
import Link from 'next/link'

const mapIcon = Leaflet.icon({
    iconUrl: '/party.png',
    iconSize: [50, 50],
})

interface PositionInterface {
    lat: number,
    lng: number
}

interface BlockMarkerParams {
    name?: string,
    position: {
        lat: number,
        lng: number
    },
    id?: string,
    image?: string,
    onChange?: (params: PositionInterface) => void,
}


export default function BlockMarker({
    name,
    position,
    id,
    image,
    onChange
}: BlockMarkerParams) {

    useMapEvents({
        click(event: any) {
            if(onChange){
                onChange(event.latlng)
            }
        }
    })
    return (
        <Marker
            icon={mapIcon}
            position={[position.lat, position.lng]}
        >
            {
                name && (
                    <Popup minWidth={240} maxWidth={240}>
                        <p>{name}</p>
                        <img
                            src={image}
                        />
                        <Link href={`/blocos/${id}`}>
                            <label className="viewBlockButton">ver</label>
                        </Link>
                    </Popup>
                )
            }
        </Marker>
    )
}