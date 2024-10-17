import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ShimmerUi = () => {
  return <ShimmerSimpleGallery card imageHeight={300} col={4} caption />; // used default "ShimmerSimpleGallery" using react shimmer library
};
export default ShimmerUi;



// manual code of shimmer setup
// import React from 'react'

// const ShimmerUi=()=>{
//     return(
//         <div className="shimmer" >
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
        
//         </div>
// )}
   

// export default ShimmerUi
