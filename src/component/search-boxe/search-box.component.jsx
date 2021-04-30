import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({Placeholder , filterfunction})=>{
    return (
        <input type='search'
        className='search' 
        placeholder = {Placeholder} 
        onChange={filterfunction}/>
    )
}