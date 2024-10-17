import React from 'react'
import { GRID_DATA } from '../utils/Constants'
import { TEMP_RES_LOGO } from '../utils/Constants'
import { RES_IMG_URL} from '../utils/Constants'



function ResSpecialItemsCards({imageId,description}) {
  
  return (
      <div className="special-item-card">
        <img className='grid-img' src={`${RES_IMG_URL}${imageId}`} alt="special-res-items" />  
        <div className="special-item-card__info">
          {/* <h3>{description}</h3> */}
        </div>
      </div>
  )
}

export default ResSpecialItemsCards