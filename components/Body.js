import React from 'react'
import RestaurantCard from './RestaurantCard'
import { DATA_RESTAURANTS } from '../utils/Constants'

function Body() {
  return (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search for restaurant and food" id="search-text"/>
            <button type="submit"><i className=" fa fa-search"></i></button>
        </div>
        <div className='res-container'>
           {/*  v1 :// static restaurant cards

            <RestaurantCard/>
            <RestaurantCard/>
           */}

           {/* // v2 :using props */}

            {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
                <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
                <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
                 */}

          {/* // v3 :dynamic RestaurantCards using map */}

            {
              DATA_RESTAURANTS.map((restaurant) => {
              console.log("restaurant is", restaurant);
              return <RestaurantCard
                cloudinaryId={restaurant.info.cloudinaryImageId} 
                name={restaurant.info.name}
                deliveryTime={restaurant.info.sla.slaString}
                ratings={`${restaurant.info.avgRatingString}`}
                cuisines={restaurant.info.cuisines?.join(" , ")}
                areaName={restaurant.info.areaName}
                discount={restaurant.info.costForTwo}
                />
                    })
                }

        </div>
    </div>
  )
}

export default Body



