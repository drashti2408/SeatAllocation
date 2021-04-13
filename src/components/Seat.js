import React from 'react';
import './seat.css';

const Seat = (props) => {
    return(
        <div onClick={() => props.onClick(props.data)} className={["seat", props.selected ? "selected" : ""].join(" ")}>{props.data}</div>
    )
}

export default Seat;