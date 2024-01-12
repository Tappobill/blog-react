import { useState } from 'react'

import Header from './components/header/Header'
import Jumbotron from './components/header/Jumbotron'
// import Post from './components/Main/Post'
import Slide from './components/slide/Slide'
import './App.css'
import ApiComponent from './components/ApiComponent'


function App() {
  

  return (
    <>
      <Header />
      <Jumbotron />
      {/* <Post /> */}
      <Slide />
      <ApiComponent/>
    </>
  )
}

export default App
