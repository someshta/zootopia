import React from "react";
import Styles from "./Nav.css";

const Nav = props => {
    return(
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-light bg-light">
            <div><span className="navbar-brand mb-0 h1">Test your memory!</span></div>
            <div><span className="nav-item">{props.message}</span></div>
            <div><span className="nav-item" score={props.score} highscore={props.highscore}>Score: {props.score} | High Score: {props.highscore} </span>
</div>
                
                
            </nav>
            {/* <div className="row">
                <div className="col-xs-4">{props.message}</div>
                <div className="col-xs-4">
                    <p score={props.score} highscore={props.highscore}>Score: {props.score} | High Score: {props.highscore} </p> 
                </div>
            </div> */}
        </div>
    );
}

export default Nav;