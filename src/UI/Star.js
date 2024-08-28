import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import PropTypes from "prop-types";

const Star = ({color,full}) => {
    return <div className={color ? 'text-highlight-light' : 'text-secondary-dark'}><FontAwesomeIcon icon={full ? faStar : faStarHalf} /></div>
}

Star.propTypes = {
    color: PropTypes.bool.isRequired,
    full: PropTypes.bool.isRequired,
}

export default Star
