import React, { useEffect, useState } from "react";
import Header from './components/Header/Header';
import List from './components/List/List';
import Helmet from 'react-helmet';
import Map from "./components/Map";
import Grid from '@mui/material/Grid';
import { getRestaurantsData, getAttractionsData, getHotelsData } from "./api";


export default function App() {
  const [restaurants, setRestaurants] = useState([])
  const [attractions, setAttractions] = useState([])
  const [hotels, setHotels] = useState([])

  const [coordinates, setCoordinates] = useState({ lat: 40.730610, lng: -73.935242 })
  const [bounds, setBounds] = useState({
    ne: {
      lat: 0,
      lng: 0
    },
    sw: {
      lat: 0,
      lng: 0
    }
  })

  useEffect(() => {
    getRestaurantsData(bounds.ne, bounds.sw)
      .then((res) => {
        if (res) {
          setRestaurants(res.data)
        }
      })
    getAttractionsData(bounds.ne, bounds.sw)
      .then((res) => {
        if (res) {
          setAttractions(res.data)
        }
      })
    getHotelsData(bounds.ne, bounds.sw)
      .then((res) => {
        if (res) {
          setHotels(res.data)
        }
      })
  }, [coordinates, bounds])

  return (
    <div className="">
      <Helmet bodyAttributes={{ style: 'background-color : #F3F4F6' }} />
      <Header />
      <Grid container spacing={3} styles={{ width: '100%' }} >
        <Grid item xs={12} md={4} >
          <main className="flex">
            <List />
          </main>
        </Grid>
        <Grid item xs={12} md={8} >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>


    </div>

  )
}