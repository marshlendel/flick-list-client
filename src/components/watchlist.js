import React from 'react';
import {useState, useEffect} from "react";
// import {Container, Row, Col} from 'reactstrap';
import MovieList from './display-movies';
import {
    Card,CardBody,
    CardTitle,
    CardColumns,
} from 'reactstrap';
import EditMovie from './edit-movie-list';


const List = (props) => {
const [movies, setMovies] = useState([])
const [updateActive, setUpdateActive] = useState(0)
const [editMovie, setEditMovie] = useState({})

let fetchMovies = () => {
    fetch('http://localhost:4000/list/', {
    method: "GET",
    headers: new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${props.token}`
    })
  })
  .then((res) => res.json())
  .then((data) => {
    setMovies(data)
  })
// console.log(movies)
}
const editUpdateMovie = (movie) => {
  setEditMovie(movie);
  console.log(movie);
}
const updateOn = () => {
  setUpdateActive(true);
}
const updateOff = () => {
  setUpdateActive(false);
}

useEffect(()=> {
     fetchMovies()
   }, []) 


  return (
    <div>
    <Card className="watchcard" style = {{color: 'white'}}>
      <CardBody>
        <CardTitle className="title" tag = "h5">My Watch List:</CardTitle>
      </CardBody>
      <CardColumns>
          <MovieList movie = {movies} editUpdateMovie={editUpdateMovie} updateOn={updateOn} fetchMovies={fetchMovies} token={props.token}/>
          {updateActive ? <EditMovie editMovie={editMovie} updateOff={updateOff} token={props.token} fetchMovies={fetchMovies} /> : <></>}
      </CardColumns>
    </Card>
    </div>
    );
};

export default List;


