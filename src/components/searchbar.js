//import React from "react";
import React from "react";
import {useState} from "react";
import {
    Card, CardText, CardBody,
    CardTitle,
    CardColumns,
    Button
} from 'reactstrap';
import FlickLogo from '../assets/FlickLogo.png';
import Add from './addedMovie'


const Search = (props) => {
    const [search, setSearch] = useState([])
    const [searchList, setSearchList] = useState([])

    let dataFetch = () => {
        let url = "https://api.themoviedb.org/3/search/movie?api_key=e6564d42419f5d069c69139088835a5e&language=en-US&query=" + inputValue.current.value + "&page=1&include_adult=false"

        fetch(url)
        .then(res => res.json())
        .then(json => {
            setSearch(json)
            setSearchList(search.results.map(results => (
                <div className="searchContainer" key={results.id}>
                    <h3>{results.title}</h3>
                    <p>Overview: {results.overview}</p>
                    <h5>Release Date: {results.release_date}</h5>
                    <img src={'https://image.tmdb.org/t/p/w200/' + results.poster_path} alt="Poster"/>
                    <br />
                    <br />
                    <button className="button" onClick={()=> {
                        console.log(results.title)
                    }}>Add to WatchList</button>
                </div>
            )))
        })
        .catch((err) => console.log(err))
}
    

    let inputValue = React.createRef();

    
return (
    <div>
    <Card className="searchCard">
        <CardBody>
        <CardTitle tag="h2">Find movies for my watchlist:</CardTitle>
        </CardBody>
        <CardColumns>
        <input ref={inputValue} className="searchInput" type="text" placeholder="Search movies..."/>
        <Button className="button" onClick={dataFetch}>Search</Button>
        </CardColumns>
        <CardBody><CardText tag="h3"> Movie search results: {searchList}</CardText>
        <br />
        </CardBody>
    </Card>
    </div>
    );
};

export default Search;
