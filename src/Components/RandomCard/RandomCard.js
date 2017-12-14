import React from "react";
import "./RandomCard.css";

class RandomCard extends React.Component {

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
        return (
    <div className="card">
        <div className="img-container">
            <p>{this.state.count}</p>
            <img src={props.image} />
        </div>
    </div>
        );
    }
}

export default RandomCard;
