import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`}></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;