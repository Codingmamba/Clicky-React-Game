import React, { Component } from 'react';
import './App.css';
import Header from './Components/header.js';
import Wrapper from "./Components/Wrapper";
import RandomCard from "./Components/RandomCard";
//Image imports
import images from './image.json';


class Image extends Component {

//   state = {
//     count: 0,
//     images: images
//   };

//   handleIncrement = event => {
//     event.preventDefault();
//     this.setState({ count: this.state.count + 1 });

//     //Tinery Statement
//     //this.state.count > 11 ? alert("You have Won") : console.log(this.state.count); ;

//   if (this.state.count > 11) {
//    //alert("You have Won")
//     //location = window.location
//   //  this.handleIncrement().reset()
//   //window.location.assign(location)  

//   }
//  }
  
  render() {
    return (
      <Wrapper>
        <p>{this.state.count}</p>
        {this.state.images.map(image => (
          <RandomCard
            id={image.id}
            onClick={this.handleIncrement}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Image />
      </div>
    );
  }
}

export default App;
