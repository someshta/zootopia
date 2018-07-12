import React from "react";
import Styles from "./Header.css";

const Header = props => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-12" id="headers">
                    <h2 message={props.message}>{props.message}</h2>
                </div> 
            </div>
        </div>
    );
}

export default Header;