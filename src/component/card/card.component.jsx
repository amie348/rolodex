import React from 'react';
import './card.styles.css'

export const Card = (props)=>{
    return <div className='card-container'>
        <img alt = "img" src={`https://robohash.org/${props.Friend.id}?set=set2&size=180x180`}></img>
        <h2>{props.Friend.name}</h2>
        <p>{props.Friend.email}</p>
    </div>
}