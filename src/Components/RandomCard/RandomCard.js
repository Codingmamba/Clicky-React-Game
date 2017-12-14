import React from "react";
import "./RandomCard.css";
import PropTypes from 'prop-types';

const RandomCard = props => (
    <a href=""><img src={props.image} className="img-fluid img-thumbnail" data-id={props.id}
        onClick={props.handleClick} width="250px" /></a>
);

RandomCard.propTypes = {
    image: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default RandomCard;
