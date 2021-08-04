import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const EditMovie = (props) => {
    const [editWatched, setEditWatched] = useState(props.setEditMovie.watched);

    let UpdateMovie = () => {
        fetch(`http://localhost:4000/list/update/${props.EditMovie.id}`, {
        method: 'PUT',
        body: JSON.stringify({list: {watched: editWatched}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization':  `${props.token}`
        })
    })
    .then ((res)=> {
        props.fetchMovies();
    })
    }
    return (
       <Modal isOpen={true} >
           <ModalHeader> Watch list</ModalHeader>
           <Form onSubmit = {UpdateMovie} >
           <FormGroup row>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Watched
            </Label>
          </FormGroup>
      </FormGroup>
           </Form>
       </Modal> 
    )
}
export default EditMovie