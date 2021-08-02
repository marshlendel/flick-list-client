import React from 'react';
import {Table, Button} from 'reactstrap';

const MovieList = (props) => {
    console.log(props.movie)
    const deleteMovie = (movie)=> {
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
    const movieMapper = () => {
        return props.movie.map((movie, index) => {
          return(
            <tr key = {movie.id}>
              <th scope = "row">{movie.id}</th>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.overview}</td>
              <td>{movie.watched}</td>
              <td>
                <Button onClick={()=> {deleteMovie(movie)}}>Delete</Button>
              </td>
            </tr>
          )
        })
      }
return(
    <>
    <hr />
    <Table striped>
        <thead>
            <tr>
                {/* <th>title</th>
                <th>year</th>
                <th>overview</th> */}
            </tr>
        </thead>
        <tbody>
            {movieMapper()}
        </tbody>
    </Table>
    </>
)

}
export default MovieList