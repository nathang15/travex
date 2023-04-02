import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationOnOutlined } from '@mui/icons-material';
import { Paper, Typography, Card, CardMedia } from '@mui/material';
import useStyles from './styles.js';
import Rating from '@mui/lab/Rating';

const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
    const classes = useStyles();
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
                        onChildClick={(child) => setChildClicked(child)}

                    >   

                    {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {/* <LocationOnOutlined color='primary' fontSize='large'/> */}
                        {place.photo && (
                        <Paper elevation={3} className={classes.paper}>
                            <img
                            className='rounded-md'
                            src={place.photo.images.large.url}
                            />
                            <div className='text-xs font-normal' gutterBottom>
                            {place.name}
                            </div>
                            <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                        )}
                    </div>
                    ))}

                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
};

export default Map;