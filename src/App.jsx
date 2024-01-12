import { useState } from 'react'
import { posts } from './resources/moc/posts'
import Header from './components/header/Header'
import Jumbotron from './components/header/Jumbotron'
import Post from './components/main/Post'
import Slide from './components/slide/Slide'
import './App.css'


function App() {
  console.log(posts)

  return (
    <>
      <Header />
      <Jumbotron />
      <Post />
      <Slide />
    </>
  )
}

export default App
