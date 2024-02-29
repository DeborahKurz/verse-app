import NavBar from "./NavBar";
import {useRouteError} from "react-router-dom";

function ErrorPage(){
    const error=useRouteError();
    console.log(error);

    return(
        <div className="App">
            <NavBar />
            <h1>Whoops! Something went wrong!</h1>
        </div>
    )
}

export default ErrorPage;
