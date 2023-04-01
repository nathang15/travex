import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ setCoords, setBounds, coords, places }) => {

    return (
        <div className='mt-2 mr-5'>
            <div className='shadow-lg rounded-lg bg-white p-3'>
                <div style={{ height: '88.2vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                        defaultCenter={coords}
                        center={coords}
                        defaultZoom={14}
                        margin={[50, 50, 50, 50]}
                        onChange={(e) => {
                            setCoords({ lat: e.center.lat, lng: e.center.lng });
                            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                          }}

                    >   
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
};

export default Map;