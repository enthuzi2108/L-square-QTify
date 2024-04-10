import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/Hero/Hero.jsx';
import { Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api.js';

function App() {

  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data};
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)
  }, [])

  const { topAlbums = [], newAlbums = [], songs = [] } = data;


  return (
    <div>
      <StyledEngineProvider injectFirst>
      <Navbar />
      <HeroSection heading1="100 Thousand Songs, ad-free" heading2="Over thousands podcast episodes"/>
      <Outlet context={{data : { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </div>
  )
}

export default App;
