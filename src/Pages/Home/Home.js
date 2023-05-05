import React from 'react';

import Banner from './Banner';
import Company from './Company';
import Contact from './Contact/Contact';
import DiscountSec from './DiscounSec/DiscountSec';
import Reviews from './Reviews';
import Stats from './Stats';
import Tools from './Tools';
import TopProduct from './TopProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Stats></Stats>
            
            <Company></Company>
            <Reviews></Reviews>
            <DiscountSec></DiscountSec>
            <TopProduct></TopProduct>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;