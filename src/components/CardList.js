import React from 'react';
import Card from './Card';


const CardList = ({ avatars }) => {
    // if (true) {
    //     throw new Error('Nooooo')
    // }

    return (
        <div>
            {
            avatars.map((user, i) => {
        return (
        <Card 
            key={i}
            id={avatars[i].id} 
            name={avatars[i].name} 
            email={avatars[i].email} 
            />
        );
    })
}
        </div>
    )
}

export default CardList;