import {NavLink} from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
        <header>
            <h1>Bible Verse Saver</h1> 
            <nav>
                <NavLink 
                    to="/"
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
        </header>
    )
}

export default NavBar;