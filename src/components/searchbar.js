//import React from "react";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardColumns,
  Button,
} from "reactstrap";

const Searchbar = (props) => {
  const [searchList, setSearchList] = useState([]);

  let addMovie = (data) => {
    let url = "http://localhost:4000/list/add";
    let watched = 0;
    let overview = data.overview.slice(0, 255);
    let year = Number(data.release_date.slice(0, 4));
    let title = data.title;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        year: year,
        overview: overview,
        watched: watched,
      }),
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => alert(`${title} ${json.message}`))
      .catch((err) => console.log(err));
  };

  let dataFetch = (event) => {
    event.preventDefault()
    let url =
      "https://api.themoviedb.org/3/search/movie?api_key=e6564d42419f5d069c69139088835a5e&language=en-US&query=" +
      inputValue.current.value +
      "&page=1&include_adult=false";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setSearchList(
          json.results.map((results) => {
            return (
              <div
                style={{ marginBottom: "4rem" }}
                className="searchContainer"
                key={results.id}
              >
                <h3>
                  <b>{results.title}</b>
                </h3>
                <p>{results.overview}</p>
                <p>{results.release_date.slice(0, 4)}</p>
                <img
                  src={"https://image.tmdb.org/t/p/w200/" + results.poster_path}
                  alt="Poster"
                />
                <br />
                <br />
                <button
                  className="button add-button"
                  onClick={() => addMovie(results)}
                >
                  Add to Watch List
                </button>
              </div>
            );
          })
        );
      })
      .catch((err) => console.log(err));
  };

  let inputValue = React.createRef();

  return (
    <div>
   
      <Card className="searchCard">
        <CardBody>
          <CardTitle tag="h2">
            <b>Find movies for your Watch List</b>
          </CardTitle>
        </CardBody>
        <CardColumns>
        <form onSubmit={(event) => dataFetch(event)}>
          <input
            ref={inputValue}
            className="searchInput"
            type="text"
            placeholder="Search movies..."
          />
          <Button type="submit" className="button search-button">
            Search
          </Button>
          </form>
        </CardColumns>
        <CardBody>
          <CardText tag="h3">{searchList}</CardText>
          <br />
        </CardBody>
      </Card>
    
    </div>
  );
};

export default Searchbar;
