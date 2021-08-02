import React from 'react';
import {useState} from "react";

const AddedMovie = props => {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState(0)
    const [overview, setOverview] = useState("")
    const [watched, setWatched] = useState(0)


    const postMovie = e => {
        e.preventDefault()

        let url = "http://localhost:4000/list/post/${movie.id}"

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
        .then(json => {
            console.log(json)
            props.setAddedMovie(false)
        })
        .catch(err => console.log(err))
    }

    return ( 
        <form onSubmit={postMovie}>
            <form type="text" 
            onChange= {(e) => setTitle(e.target.value)} value={title} />
            <form type="text"
            onChange={(e) => setYear(e.target.value)} value={year}/>            
            <form type="text"
            onChange={(e) => setOverview(e.target.value)} value={overview}/>
            <form type="boolean"
            onChange={(e) => setWatched(e.target.value)} value={watched} />           
        </form>
    )
    }
export default AddedMovie;