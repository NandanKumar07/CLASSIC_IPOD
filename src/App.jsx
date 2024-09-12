import { useState } from 'react'
import './App.css'
import Cover from './assets/music_cover.jpg';
import Source from './assets/follow_god_by_Kanye_West.mp3';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImportPlaylist from './components/ImportPlaylist';

function App() {

  return (
      <div>
        <Navbar/>
        <Home/>
        <ImportPlaylist/>
      </div>
  )
}

export default App
