import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import List from './components/List/List';
import Helmet from 'react-helmet';
import Map from "./components/Map";
import Grid from '@mui/material/Grid';
import { getRestaurantsData, getAttractionsData, getHotelsData } from "./api";


export default function App() {
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [restaurants, setRestaurants] = useState([])
  const [attractions, setAttractions] = useState([])
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getRestaurantsData(bounds.sw, bounds.ne).then((data) => {
      setRestaurants(data)
    })
    getHotelsData(bounds.sw, bounds.ne).then((data) => {
      setHotels(data)
    })
    getAttractionsData(bounds.sw, bounds.ne).then((data) => {
      setAttractions(data)
    })
  }, [coords, bounds]);

  return (
    <div className="">
      <Helmet bodyAttributes={{ style: 'background-color : #F3F4F6' }} />
      <Header />
      <Grid container spacing={3} styles={{ width: '100%' }} >
        <Grid item xs={12} md={4} >
          <main className="flex-grow justify-end ml-6">
            <List places = {restaurants}/>
          </main>
        </Grid>
        <Grid item xs={12} md={8} >
          <Map 
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            // places={places}
          />
        </Grid>
      </Grid>


    </div>

  )
}