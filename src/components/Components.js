import React from 'react';
import PreNavbar from './navbar/PreNavbar';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';
import Ads from './ads/Ads';
import Heading from './heading/Heading';
import StarProducts from './starProducts/starProducts';
import HotAccessoriesMenu from './HotAccessories/HotAccessoriesMenu';
import HotAccessories from './HotAccessories/HotAccessories';
import ProductReviews from './ProductReviews/ProductReviews';
import Videos from './videos/Videos';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import NavOptions from './navbar/NavOptions';
import data from '../data/data.json';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Component = () => {
    return (
        <Router>
            <PreNavbar/>
            <Navbar/>
            <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop}
            fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
             
            <Slider start={data.banner.start}/>
            <Ads offer={data.offer}/>
            <Heading text="STAR PRODUCTS"/>
            <StarProducts starProduct={data.starProduct}/>
            <Heading text="HOT ACCESSORIES"/>
            <HotAccessoriesMenu/>
         
            <Route exact path='/music'>
                <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
            </Route>

            <Route exact path='/smartDevice'>
                <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
            </Route>
            
            <Route exact path='/home'>
                <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
            </Route>

            <Route exact path='/lifestyle'>
                <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>
            </Route>

            <Route exact path='/mobileAccessories'>
                <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
            </Route>

            <Heading text="PRODUCT REVIEWS"/>
            <ProductReviews productReviews={data.productReviews}/>
            <Heading text="VIDEOS"/>
            <Videos videos={data.videos}/>
            <Heading text="IN THE PRESS"/>
            <Banner banner={data.banner}/>
            <Footer footer={data.footer}/>
        </Router>
    );
};

export default Component;