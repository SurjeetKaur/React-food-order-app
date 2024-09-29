import React from 'react'
import RestaurantCard from './restaurantCard'

function Body() {
  return (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search" id="search-text"/>
            <button>Search</button>
        </div>
        <div className='res-container'>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
  )
}

export default Body