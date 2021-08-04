import React, {useState, useEffect} from "react"
import {
    Button,
    Row,
    Col
} from "reactstrap"

const DisplayList = (props) => {
    let [yourMovies, setYourMovies] = useState([])

    let deleteMovies = (data) => {
        const fetch_url = `http://localhost:4000/list/delete/${data.id}`;
        fetch(fetch_url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then (response => response.json()) 
        .then(data => console.log(data.message))
        .catch(err => {
            console.error(err)
        })
    }

    let updateMovie = (data) => {
        let url = `http://localhost:4000/list/update/${data.id}`
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
				watched: data.watched ? 0 : 1
            }),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => console.log(json.message))
        .catch(err => console.log(err))
    }

    let getMovies = () => {
        let url = "http://localhost:4000/list/"

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => {
            setYourMovies(json.map(movies =>  {

                let color = movies.watched ? "success" : "secondary"
                return <div style={{"margin": "10px 0"}} key={movies.id}>
                    <Row>
                    <Col>{`${movies.title} (${movies.year})`}</Col>
                    <Col><Button color={color} onClick={() => updateMovie(movies)}>
                    {
                        movies.watched ? "Watched" : "Not Watched"
                    }
                    </Button></Col>
                    <Col><Button color="danger" onClick={()=> deleteMovies(movies)}>Delete</Button></Col>
                    </Row>
                </div>
            
                }))
        })
        .catch(err => console.log(err))
    } 

    useEffect(() => {
        getMovies()
    }, [yourMovies])
    

    return(
        <div style={{"marginBottom": "50px", "border": "1px solid white"}}>
        {/* <button class="button" onClick={() => getMovies()}>Display Movies</button> */}
        <h3 style={{"margin": "10px 0 50px 0"}}>Your Watch List</h3>
        { yourMovies}
        </div>
    )
}

export default DisplayList