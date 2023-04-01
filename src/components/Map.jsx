import React from 'react';
import GoogleMapReact from 'google-map-react';
import PinnedPoint from './PinnedPoint';

const Map = () => {
    const defaultProps = {
        center: {
            lat: 40.202278,
            lng: -77.196548
        },
        zoom: 14
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}

            >
                <PinnedPoint
                    lat={40.2026}
                    lng={-77.1952}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
};

export default Map;