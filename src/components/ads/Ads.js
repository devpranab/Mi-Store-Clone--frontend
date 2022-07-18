import React from 'react';
import Add from './Ad.js';
import '../../stylesheet/Ads.css';


const Ads = ({offer}) => {
    return (
        <div className="offersSection"> 
        {offer.map((item,index)=>(
        <Add key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Ads;