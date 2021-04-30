import React from 'react';

import {Card} from '../card/card.component.jsx';
import './card-list.styles.css';

export const CardList = props=>{
    return <div className='card-list'>
    {props.Friends.map(Friend=>(
        
        <Card key = {Friend.id} Friend = {Friend}/>
     //   <h1 key={Friend.id}>{Friend.name}</h1>
      
      ))
    }</div>
}