import React from "react";
import Styles from "./Card.css";
import cards from "../../cards.json"

const Card = props => (
    
      <div className="card">
        <div className="img-container">
          <button onClick={() => props.setAsClicked(props.id)} clicked={props.clicked} id={props.id}><img src={props.image}
              key={props.id}
              clicked={props.clicked}
              /></button>
        </div>
      </div>
  );

  export default Card;

  