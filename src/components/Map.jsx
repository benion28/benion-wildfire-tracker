import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(event => {
        if(event.categories[0].id === 8) {
            return <LocationMarker 
                        key={ event.geometries[0].date } 
                        lat={ event.geometries[0].coordinates[1] } 
                        lng={ event.geometries[0].coordinates[0] }
                        onClick={ () => setLocationInfo({ id: event.id, title: event.title }) }
                    />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA1RXBx8kzgyx_T9i_9jSgHpum5ie75MAE" }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                { markers }
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={ locationInfo } /> }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
