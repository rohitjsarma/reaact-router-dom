import React from "react";
import {Link} from 'react-router-dom';

let Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
            
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                    
                            <li className="nav-item px-2">
                                <Link to="/get" className="nav-link">Getapi</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/form" className="nav-link">Form</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/pure" className="nav-link">Pure Component</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/post" className="nav-link">Post Api</Link>
                            </li>
                            
                            <li className="nav-item px-2">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;