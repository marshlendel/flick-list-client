import {Button} from 'reactstrap';

const Logout = (props) => {
    return <Button className="button" outline color="primary" padding="10px" onClick={props.clearSession}>Logout</Button>
}

export default Logout