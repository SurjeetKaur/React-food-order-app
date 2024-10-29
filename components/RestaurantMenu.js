import React,{useEffect,useState} from 'react' 
import { MOCK_RES_MENU } from '../utils/Constants';

function RestaurantMenu() {
    useEffect(()=>{
        // fetch data from API
       fetchResMenu();
    },[]);
    const [resMenu, setResMenu] = useState([]);
    
    const fetchResMenu = async () => {
            const menuAPI = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0044745&lng=72.55311549999999&restaurantId=43105&catalog_qa=undefined&submitAction=ENTER");
            const menuJsonData = await menuAPI.json();
            setResMenu(menuJsonData);
            //console.log(menuJsonData);
            const menuCards = menuJsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards;
            console.log(menuCards);

           // if menu cards do not have data then render data from mock-res-menu
            if (menuCards) {
                setResMenu(menuCards)
            }
            else {
                setResMenu(MOCK_RES_MENU)
            }
        }
// incase there is no data in resMenu then show shimmer UI
        if (resMenu.length == 0) {
            return <ShimmerUi />
        }
  return (
    <div>
         <h3>Restaurant Menu</h3>
                <ul>
                    {resMenu.map((menu) => (
                        <li key={menu.card.info.id}>
                            {menu?.card?.info?.name}
                        </li>
                    ))}
                </ul>           
    </div>
  )
}

export default RestaurantMenu




