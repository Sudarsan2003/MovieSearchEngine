import { useState } from "react"
import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Moviecard from "./Moviecard"
import MovieNotFound from './MovieNotFound'
import Spinner from "./Spinner"
function App() {
  const [popularMovies, setPopularMovies] = useState([])
  const [movieName, setMovieName] = useState([])
  const[searchedMovies,setSearchedMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4a3be2203ea40ced49f144e93997c7aa")
      .then((res) => {
        setPopularMovies(res.data.results)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=4a3be2203ea40ced49f144e93997c7aa`)
      .then((res) => {
        setSearchedMovies(res.data.results)
        setIsLoading(false)
      })
  }, [movieName])
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Movie Search Engine</h1>
        <div className="search-box">
        <button class="btn-search"><i class="fas fa-search icon"></i></button>
        <input
        type="text" class="input-search"
          onChange={(e) => {
            setMovieName(e.target.value)
            setIsLoading(true)
          }}
          value={movieName}
          placeholder='Search movies here' />
        </div>
       
      </div>
      <div className="container mt-5">
        {movieName !="" && searchedMovies==0 ?<MovieNotFound/>: ""}
        {isLoading==true ?<h4 style={{textAlign:"center"}}><Spinner/></h4>:""}
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          { searchedMovies.length==0 && movieName=="" ? popularMovies.map((item, i) => {
            return <Moviecard
              poster_path={item.poster_path}
              title={item.title}
              overview={item.overview}
            />
          }): isLoading==false ? searchedMovies.map((item, i) => {
            return <Moviecard
              poster_path={item.poster_path}
              title={item.title}
              overview={item.overview}
            />
          }): ""}

        </div>
      </div>

    </>
  )
}

export default App