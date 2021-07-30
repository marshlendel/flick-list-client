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
    .then(json => setMovies(json.results))
    console.log(movies[0].original_title)
    .catch(err => console.log(err))
}
    
return (
    <div>
        <Card style = {{color: 'white'}}>
            <CardBody>
                <CardTitle tag="h5">Watch List:</CardTitle>
            </CardBody>
            <CardColumns>
                <img width="100%" src={movies[0]} alt="movie1" />
            </CardColumns>
            <CardColumns>
                <img width="100%" src="/assets/318x180.svg" alt="movie2" />
            </CardColumns>
            <CardColumns>
                <img width="100%" src="/assets/318x180.svg" alt="movie3" />
            </CardColumns>
    
            <CardBody>
            <CardText>Movies added from out Fetch will be displayed here</CardText>
            <Button className="button" onClick={handleFetches}><b>Load My List</b></Button>
            </CardBody>
        </Card>
    </div>
    );
};

export default List;

