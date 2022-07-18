import React from 'react';
import PreNavbar from './navbar/PreNavbar';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';
import Ads from './ads/Ads';
import Heading from './heading/Heading';
import StarProducts from './starProducts/starProducts';
import data from '../data/data.json';

const Component = () => {
    return (
        <div>
            <PreNavbar/>
            <Navbar/>
            <Slider start={data.banner.start}/>
            <Ads offer={data.offer}/>
            <Heading text="STAR PRODUCTS"/>
            <StarProducts starProduct={data.starProduct}/>
            <Heading text="HOT ACCESSORIES"/>
        </div>
    );
};

export default Component;