import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ coordinates, setCoordinates, setBounds }) => {
    const defaultCenter = {
        lat: 40.730610,
        lng: -73.935242
    }

    return (
        <div style={{ height: '85vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultCenter}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds(
                        {
                            ne: e.marginBounds.ne,
                            sw: e.marginBounds.sw,
                        }
                    )
                }}
            >
            </GoogleMapReact>
        </div>
    )
};

export default Map;