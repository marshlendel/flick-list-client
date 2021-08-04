import React from 'react';
import {useState, useEffect} from "react";
// import {Container, Row, Col} from 'reactstrap';
import MovieList from './displaymovies';
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import EditMovie from './editmovie';


const List = (props) => {
const [movies, setMovies] = useState([])

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


