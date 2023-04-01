import React from "react";
import Header from './components/Header/Header';
import List from './components/List/List';
import Helmet from 'react-helmet';
import Map from "./components/Map";
import Grid from '@mui/material/Grid';


export default function App() {
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
          <Map />
        </Grid>
      </Grid>


    </div>

  )
}