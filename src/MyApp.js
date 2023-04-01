import React from "react";
import Header from './components/Header/Header';
import List from './components/List/List';
import Helmet from 'react-helmet';


export default function MyApp() {
    return (
      <div className="">
      <Helmet bodyAttributes={{style: 'background-color : #F3F4F6'}}/>
      <Header />

      <main className="flex">
        <List />
      </main>
    </div>
      
    )
  }