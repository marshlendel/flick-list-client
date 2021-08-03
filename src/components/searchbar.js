//import React from "react";
import React from "react";
import {useState} from "react";
import {
    Card, CardText, CardBody,
    CardTitle,
    CardColumns,
    Button
} from 'reactstrap';

const Searchbar = (props) => {
    const [search, setSearch] = useState([])
    const [searchList, setSearchList] = useState([])

    let addMovie = (data) => {
        let url = "http://localhost:4000/list/add"
        let watched = 0
        let overview = data.overview.slice(0, 255)
        let year = Number(data.release_date.slice(0, 4))
        let title = data.title

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                year: year,
				overview: overview,
				watched: watched
            }),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => alert(`${title} ${json.message}`))
        .catch(err => console.log(err))
    } 

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
                    <button className="button" onClick={()=> addMovie(results)}>Add to Watch List</button>
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
        <br />
        <br />
        <Button className="button" onClick={dataFetch}>Search</Button>
        </CardColumns>
        <CardBody><CardText tag="h3"> Movie search results: {searchList}</CardText>
        <br />
        </CardBody>
    </Card>
    </div>
    );
};

export default Searchbar;
