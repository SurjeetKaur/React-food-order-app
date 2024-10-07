import React,{useEffect,useState} from 'react'  // useEffect and useState are (hooks)functions 
import RestaurantCard from './RestaurantCard'
import { DATA_RESTAURANTS } from '../utils/Constants'

//api
// https://www.swiggy.com/mapi/homepage/getCards?lat=17.3573882&lng=78.5112407

// function Body() {
//   return (
//     <div className="body">
//         <div className="search">
//             <input type="text" placeholder="Search for restaurant and food" id="search-text"/>
//             <button type="submit"><i className=" fa fa-search"></i></button>
//         </div>
//         <div className='res-container'>
//            {/*  v1 :// static restaurant cards

//             <RestaurantCard/>
//             <RestaurantCard/>
//            */}

//            {/* // v2 :using props */}

//             {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
//                 <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
//                 <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
//                  */}

//           {/* // v3 :dynamic RestaurantCards using map : array map definition The map method returns a new array, with the same length as the original array.The new array contains the results of applying the callback function to each element of the original array.*/}

//             {
//               DATA_RESTAURANTS.map((restaurant) => {
//               // console.log("restaurant is", restaurant);
//               return <RestaurantCard
//                 cloudinaryId={restaurant.info.cloudinaryImageId} 
//                 name={restaurant.info.name}
//                 deliveryTime={restaurant.info.sla.slaString}
//                 ratings={`${restaurant.info.avgRatingString}`}
//                 cuisines={restaurant.info.cuisines?.join(", ")} // join() is used to combine elements into a string. When working with objects, extract the property values to make them strings.
//                 areaName={restaurant.info.areaName}
//                 discountHeader={restaurant.info.aggregatedDiscountInfoV3?.header} 
//                 discountSubHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
//                 discountTag={restaurant.info.aggregatedDiscountInfoV3?.discountTag}
//                 />
//                     })
//                 }

//         </div>
//     </div>
//   )
// }
// export default Body







function Body() {
  useEffect(() => {
      console.log("component is re rendered")
      fetchData()
  }, [])
  // normal js variable
  // let filteredList = DATA_RESTAURANTS;

  let [restaurants, setRestaurants] = useState([])
  // const resList = null

  const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3573882&lng=78.5112407&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      const json = await data.json()
      const resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      setRestaurants(resData)
  }


  return (
      <div className='body'>
        <div className="search">
          <input type="text" placeholder="Search for restaurant and food" id="search-text"/>
          <button onClick={() => {
            const searchValue = document.getElementById("search-text").value.toLowerCase(); 
            let filteredList = restaurants.filter((restaurant) => {
              const restaurantName = restaurant.info.name.toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              const cuisines = restaurant.info.cuisines.join(',').toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              return restaurantName.includes(searchValue) || cuisines.includes(searchValue); 
            });
            if (filteredList.length === 0) {
              setRestaurants([]); // clear the restaurants array
              // alert(`Restaurant or food not found: ${searchValue}`); // display an alert message
            } else {
              setRestaurants(filteredList); 
            }
            
            console.log("after search restaurnts", restaurants)
          }}
          ><i className=" fa fa-search"></i>
          </button>
        </div>

          <div className='filter'>
              <button onClick={() => {
                  let filteredList = restaurants.filter((restaurant) => {
                      return restaurant.info.avgRatingString >= 4.5
                  })
                  console.log("filteredList", filteredList)

                  //restaurants = filteredList
                  setRestaurants(filteredList)
                  console.log("after filter restaurnts", restaurants)
              }} >
                Top Rated Restaurants ➡️
              </button>
          </div>
          <div id="res-id" className='res-container'>
              {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
              <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
              <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
               */}

              {
                restaurants && restaurants.length > 0 ?
                  restaurants && restaurants.map((restaurant, index) => {
                      return <RestaurantCard
                          key={index}
                             cloudinaryId={restaurant.info.cloudinaryImageId} 
                            name={restaurant.info.name}
                            deliveryTime={restaurant.info.sla.slaString}
                            ratings={`${restaurant.info.avgRatingString}`}
                            cuisines={restaurant.info.cuisines?.join(", ")} // join() is used to combine elements into a string. When working with objects, extract the property values to make them strings.
                            areaName={restaurant.info.areaName}
                            discountHeader={restaurant.info.aggregatedDiscountInfoV3?.header} 
                            discountSubHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
                            discountTag={restaurant.info.aggregatedDiscountInfoV3?.discountTag}
                          
                     />
                  })
                  :
                  <div>No restaurant or food found matching your search criteria.</div>
                  
                
                }
          </div>
      </div>
  )
}
export default Body






