import React from 'react';
import "./card.css";



const Card = ({ id, name, email }) => {
    // const { id, name, email } = props;
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw3 shadow-3'>
            <div className= "box-img">
            <img alt="avatar" src={`${id}`} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;