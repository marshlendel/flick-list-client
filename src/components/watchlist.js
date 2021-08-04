import React from 'react';
import {useState, useEffect} from "react";
// import {Container, Row, Col} from 'reactstrap';
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';


const List = (props) => {
const [movies, setMovies] = useState([])

let UpdateMovie = () => {
  fetch(`http://localhost:4000/list/update/${props.EditMovie.id}`, {
  method: 'PUT',
  body: JSON.stringify({list: {watched: editWatched}}),
  headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization':  `${props.token}`
  })
})
.then ((res)=> {
  props.fetchMovies();
})
}

let deleteMovie = (movie)=> {
  fetch(`http://localhost:4000/list/delete/${movie.id}`, {
      method: 'DELETE',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
      })
  })
  .then (() => {
      props.fetchMovies()
  })
}

let fetchMovies = () => {
    fetch('http://localhost:4000/list/', {
    method: "GET",
    headers: new Headers({
        "Content-type": "application/json",
        "Authorization": props.sessionToken
    })
  })
  .then(res => res.json())
  .then(json => {
    setMovies(json.map(movies => {
      return <div key = {movies.id}>
        <Row>
          <Col>{ `${movies.title} (${movies.year})` }</Col>
          <Col><Button color={color} onClick={() => updateMovie(movies)}></Button></Col>
          <Col><Button color="danger" onClick={()=> deleteMovie(movies)}>Delete</Button></Col>
        </Row>
      </div>
    }))
    console.log(movies)
  })
  .catch(err => console.log(err))
}

useEffect(()=> {
     fetchMovies()
   }, [movies]) 


  return (
    <div>
      {movies}
    <Card className="watchcard" style = {{color: 'white'}}>
      <CardBody>
        <CardTitle className="title" tag = "h5">My Watch List:</CardTitle>
        <Button className="button" onClick={()=> fetchMovies()}>Display</Button>
      </CardBody>
    </Card>
    </div>
    );
};

export default List;


