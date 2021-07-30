import React from 'react';
import {useState} from "react";
import {
    Card, CardText, CardBody,
    CardTitle,
    CardColumns,
    Button
} from 'reactstrap';


const List = (props) => {
const [movies, setMovies] = useState([])
const [movieList, setMovieList] = useState([])

let handleFetches = () => {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=e6564d42419f5d069c69139088835a5e&language=en-US&page=1"

    fetch(url, {
    method: "GET",
    headers: new Headers({
        "Content-type": "application/json",
        "Authorization": props.sessionToken
    })
  })
  .then((res) => res.json())
  .then(data => {
    displayMovies(data)
    setMovies(data)
  })
  // console.log(movies)
  // .catch(err => console.log(err))

}
  
let displayMovies = (data) => {
  let flicks = data.results
  // console.log(flicks)
  let result = flicks.map((item, index)=> {
    // console.log(index, item)
    console.log(item.original_title)
  })


}
  return (
    <div>
      <Card style = {{color: 'white'}}>
        <CardBody>
          <CardTitle tag="h5">My Watch List:</CardTitle>
        </CardBody>
        <CardColumns>
        <img width="100%" src={movies} alt="movie1" />
        </CardColumns>
        <CardColumns>
        <img width="100%" src="/assets/318x180.svg" alt="movie2" />
        </CardColumns>
        <CardColumns>
        <img width="100%" src="/assets/318x180.svg" alt="movie3" />
        </CardColumns>
    
        <CardBody>
          <CardText>Movies added from our Fetch will be displayed here</CardText>
          <Button onClick={handleFetches}>Load My List</Button>
        </CardBody>
      </Card>

    </div>
    );
};

export default List;

