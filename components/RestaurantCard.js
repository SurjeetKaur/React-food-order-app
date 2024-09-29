import React from 'react'
import { TEMP_RES_LOGO } from '../utils/ImagesConstants'

function RestaurantCard() {
    return (
        <div className='res-card'>
            <img className='res-logo' src={TEMP_RES_LOGO} alt="res-logo" />
            <h3>Test Res</h3>
            <h3>Test cuisines</h3>
            <h3>4.2 stars</h3>
            <h3>12 minutes</h3>
        </div>
    )
}

export default RestaurantCard