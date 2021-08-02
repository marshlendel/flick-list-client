import React from 'react';
import {useState, useEffect} from "react";
import {
    Card, CardText, CardBody,
    CardTitle,
    CardColumns,
    Button
} from 'reactstrap';


const List = (props) => {
const [movies, setMovies] = useState([])

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
    // displayMovies(data)
    setMovies(data)
  })
  console.log(movies)

}
 useEffect(()=> {
   handleFetches()
 }, []) 

  return (
    <div> 
      <Card className = "card" style = {{color: 'white'}}>
        <CardBody>
          <CardTitle className="title" tag="h5">My Watch List:</CardTitle>
        </CardBody>
        <CardColumns>
        <img width="100%" src={movies} alt="movie1" />
        <Button onClick="submit">delete</Button>
        </CardColumns>
        <br />
        <CardColumns>
        <img width="100%" src="/assets/318x180.svg" alt="movie2" />
        <Button onClick="submit">delete</Button>
        </CardColumns>
        <br />
        <CardColumns>
        <img width="100%" src="/assets/318x180.svg" alt="movie3" />
        <Button onClick="submit">delete</Button>
        </CardColumns>
        < br />
        <br />
        <CardBody>
          <CardText>Look at my list!</CardText>
        </CardBody>
      </Card>
    </div>
    );
};

export default List;


