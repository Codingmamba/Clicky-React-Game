import React, { Component } from 'react';
import './App.css';
import Header from './Components/header.js'

//Image pulls
import sprite from './images/sprite.jpeg';
import pepsi from './images/pepsi.jpeg';
import pepper from './images/pepper.jpeg';
import mist from './images/mist.jpeg';
import lemon from './images/lemon.jpeg';
import fanta from './images/fanta.jpeg';
import dry from './images/dry.jpeg';
import dew from "./images/dew.jpeg";
import crush from './images/crush.jpeg';
import coca from './images/coca.jpeg';
import aw from './images/aw.jpeg';
import sevonup from './images/7up.jpeg';


class Image extends Component {

  state = {
    count: 0
  };

  handleIncrement = event => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });

    //Tinery Statement
    //this.state.count > 11 ? alert("You have Won") : console.log(this.state.count); ;

  if (this.state.count > 11) {
   //alert("You have Won")
    //location = window.location
  //  this.handleIncrement().reset()
  //window.location.assign(location)  

  }
 }
  
  render() {
    return(
    <div>

    <p>{this.state.count}</p>

     <div className="container">
      <div className="row">
       <div className="col">
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="1" onClick={this.handleIncrement} src={sprite}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="2" onClick={this.handleIncrement} src={pepsi}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="3" onClick={this.handleIncrement} src={pepper}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="4" onClick={this.handleIncrement} src={mist}/></a>

      </div>
      </div>

      <div className="row">
      <div className="col">

      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="5" onClick={this.handleIncrement} src={dry}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="6" onClick={this.handleIncrement} src={lemon}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="7" onClick={this.handleIncrement} src={fanta}/></a>
      <a href=""><img className="img img-thumbnail clicks-dew" alt="images of sofas" key="8" onClick={this.handleIncrement} src={dew}/></a>
      </div>
      </div>

      <div className="row">
      <div className="col">

      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="9" onClick={this.handleIncrement} src={crush}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="10" onClick={this.handleIncrement} src={coca}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="11" onClick={this.handleIncrement} src={sevonup}/></a>
      <a href=""><img className="img img-thumbnail clicks" alt="images of sofas" key="12" onClick={this.handleIncrement} src={aw}/></a>
      </div>
      </div>

     </div> {/*container*/}

    </div> //{Enclosing tags}
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
