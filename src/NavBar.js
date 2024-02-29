import {NavLink} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
        <nav>
            <NavLink 
                to="/"
                className="nav-link"
            >
                All Verses
            </NavLink>
            <NavLink 
                to="/form"
                className="nav-link"
            >
                Add A Verse
            </NavLink>
            <NavLink 
                to="/oldTestament"
                className="nav-link"
            >
                Old Testament
            </NavLink>
            <NavLink 
                to="/newTestament"
                className="nav-link"
            >
                New Testament
            </NavLink>
        </nav>
    )
}

export default NavBar;