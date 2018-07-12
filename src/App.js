import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";

const zooCards = cards;
class App extends Component {

state = {
  score: 0,
  highscore: 0,
  cards: zooCards,
  message: "Don't click on a city slicker more than once! Click to begin.",
}

//shuffle cards in array
shuffleCards = array => {
  for (let i = array.length - 1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  } 
}

//game over- change new high score, reset score to 0
gameOver = () => {
  
  this.setShake();

  //when game ends, reset cards clicked value to false 
  const zoo = this.state.cards.map(elt => {
    return{...elt}
  });

  zoo.forEach(card => {
    card.clicked = false; 
  });

  
    this.setState({
      highscore: this.state.score > this.state.highscore? this.state.score : this.state.highscore,
      score: 0,
      message: "You guessed incorrectly! Try again!",
      cards: zoo
    })
  

  


    
  return true;
}

newGame = () => {
  this.setShake();
  
  const zoo = this.state.cards.map(elt => {
    return{...elt}
  });

  zoo.forEach(card => {
    card.clicked = false; 
  });

  this.setState({
    highscore: this.state.score > this.state.highscore? this.state.score : this.state.highscore,
    score: 0,
    message: "Wow! Great memory, you guessed them all! Click a card to play again",
    cards: zoo
  })

  return true;
}

setShake = () => { 
  var containerShake = document.getElementById("card-container-id");
    containerShake.classList.add("apply-shake"); 
}

removeShake = () => {
  var noContainerShake = document.getElementById("card-container-id");
  noContainerShake.classList.remove("apply-shake");
}

//function to handle card clicks
setAsClicked = id => {
  
  this.removeShake();
  const zoo = this.state.cards.map(elt => {
    return{...elt}
  });
  const checkIfClicked = zoo.every(element => element.clicked === true);
  // const checkClicks = zoo.some(element => element.clicked === false);
  const findZooCard = zoo.find(card => card.id === id); 


  if(findZooCard.clicked === false) {
    findZooCard.clicked = true;
    console.log(zoo);
    console.log(checkIfClicked);
    this.shuffleCards(zoo);

    this.setState({
          score: this.state.score + 1,
          message: "You guessed correctly!",
          cards: zoo
        }) 
    
  }else if (checkIfClicked === true) {
      this.newGame();
  }else{
    this.gameOver();
  }
}


  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highscore={this.state.highscore} message={this.state.message}/>
        <Header newGame={this.setAsClicked}/>
        <div className="card-container" id="card-container-id">{this.state.cards.map(card => (<Card
                key={card.id}
                id={card.id}
                image={card.image}
                setAsClicked={this.setAsClicked}
                clicked={card.clicked}
              />
            ))
        }
        </div>
      </Wrapper>
    );
  }
}

export default App;