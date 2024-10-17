import React,{useEffect,useState} from 'react'  // useEffect and useState are (hooks)functions 
import RestaurantCard from './RestaurantCard'
import { DATA_RESTAURANTS ,GRID_DATA} from '../utils/Constants'
import ResSpecialItemsCards from './ResSpecialItemsCards'
import ShimmerUi from './ShimmerUi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Body() {
  {/* useEffect hook is used to trigger a data fetching operation when the component first loads, 
  ensuring that the data is retrieved only once during the component's lifecycle.*/}
  
  useEffect(() => {
      //console.log("component is re rendered");
      fetchData()
  }, [])
  
  // let filteredList = DATA_RESTAURANTS; // this is normal js variable, instead using useState in React app

{/* ------------------ all useState------------------------------------------ */}

  let[restaurants, setRestaurants] = useState([]); //restaurants is a state : initially restaurants would be empty
  let [specialItemsData, setSpecialItemsData] = useState([])
  let[shimmerEffect,setShimmerEffect]=useState(false);
  let[noResultsFound,setNoResultsFound]=useState(false);
  
{/*---------async function named fetchData to call  and fetch data from swiggy API-------------------- */}  

    const fetchData = async () => {
       setShimmerEffect(true); // Show shimmer effect while data is being fetched
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3573882&lng=78.5112407&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); // lon and lat for hyderabad
          //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  
        const json = await data.json()
        //console.log( 'data of api',data)
        const resGridData= json.data.cards[0].card.card.imageGridCards?.info
        setSpecialItemsData(resGridData)
        console.log('data special items',resGridData);
        setShimmerEffect(false);
        const resData = json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants
        setRestaurants(resData)
        console.log("restaurant data",resData);
        setShimmerEffect(false);// Hide shimmer effect after data is fetched
    }
   //  return (restaurants.length==0? <ShimmerUi />:
    return (shimmerEffect? <ShimmerUi/>:
      <div className='body'>
        { /* ------------------grid special items------------------------ */ }

        <div className="images-grid-container">
          <div className="grid-header">
            <h2>What's on your mind?</h2>
          </div>
          <div className="res-special-items"> 
          {specialItemsData && (
          <Slider
            className='grid-slider'
            dots={true}
            infinite={true}
            speed={1000}
            slidesToShow={5}
            slidesToScroll={4} 
            style={{ width: '100%'}}
            arrows={true} 
            autoplay={true}
            autoplaySpeed={3000}
            >           
          {
            specialItemsData.map((specialItem, index) => (
               <ResSpecialItemsCards
                      key={index}
                     imageId={specialItem.imageId}
                      description={specialItem.action.text}      
                />
            ))
                }
                </Slider>
          )}
          </div> 
              
        </div>
            
         {/* section contains restaurants with online food delievery     */}

        <div className='outer-container-restaurants'> 
        <h2>Restaurants with online food delievery</h2>  
        {/*----------div named Search contain code to search desired food and restaurants from list or data -------------- */} 

        <div className="search">
          <input type="text" placeholder="Search for restaurant and food" id="search-text"/>
          <button onClick={() => {
            const searchValue = document.getElementById("search-text").value.toLowerCase(); 
            let filteredResItems = restaurants.filter((restaurant) => {
              const restaurantName = restaurant.info.name.toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              const cuisines = restaurant.info.cuisines.join(',').toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              return restaurantName.includes(searchValue) || cuisines.includes(searchValue); 
            });
            if (filteredResItems.length === 0) {
              setRestaurants([]); // clear the restaurants array
              setNoResultsFound(true);
              //alert('No restaurant or food found matching your search criteria');
            } else {
              setRestaurants(filteredResItems); 
              setNoResultsFound(false);
            }
          }}
          ><i className=" fa fa-search"></i>
          </button>
        </div>
       {/*----------- div named filter to show restaurants list having rating above or equal to 4.5 -------------------*/}

          <div className='filter'>
              <button onClick={() => {
                  let filteredList = restaurants.filter((restaurant) => {
                      return restaurant.info.avgRatingString >= 4.5
                  })
                  console.log("filteredList", filteredList)

                  //restaurants = filteredList
                  setRestaurants(filteredList)
                  console.log("after filter restaurants", restaurants)
              }} >
                Top Rated Restaurants ➡️
              </button>
          </div>

   {/* -----------------div container which has all cards of restaurants with data -------------------------------*/}
          
            <div id="res-id" className='res-container'>
                {/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
                <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
                <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
                */}
                
                {
                    noResultsFound ? ( <div id="alert-message">No restaurants or food found matching your search criteria.</div>):(
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
                )} 
            </div>
          </div>
        </div>
    )
}

// ----------export main Body component----------------------
export default Body






