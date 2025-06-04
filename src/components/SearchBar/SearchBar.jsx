import React, { useState } from 'react';
import "./searchBar.scss"

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  // used onClick switch highlighted button type to switch button style
  const switchType = (event) => {
    setQuery((prev) => ({ ...prev, type: event}));
  }

  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map(type => (
          <button 
            key={type} 
            onClick={() => switchType(type)}
            className={query.type === type? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input type='number' name='minPrice' placeholder='Min Price' />
        <input type='number' name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
        <button>
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar