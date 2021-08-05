let APIURL = ""

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "http://localhost:4000";
        break;
    case "flick-list-client-mb.herokuapp.com":
        APIURL= "https://flick-list-mb.herokuapp.com"
        break;
    default:
        //
}

export default APIURL