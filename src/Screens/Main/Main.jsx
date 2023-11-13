import './Main.scss';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';


import Slider from "../../Components/Slider/Slider";
import BannerAboutUs from '../../Components/BannerAboutUs/BannerAboutUs';
import OurProducts from '../../Components/OurProducts/OurProducts';
import { useContext } from 'react';
import { MyStoreContext } from '../../App';

const slides = [
    {
        id: '1',
        imgSrc: './images/slide1.jpg',
        imgAlt: 'slide',
        title: 'Get Garden Fresh Fruits',
        marker: 'Natural!!',
        colorText: '#FFFFFF',
        colorMarker: '#FFFFFF'
    },
    {
        id: '2',
        imgSrc: './images/slide2.jpg',
        imgAlt: 'slide',
        title: 'Get 10% off on Vegetables',
        marker: 'Offer!!',
        colorText: '#274C5B',
        colorMarker: '#7EB693'
    },
    {
        id: '3',
        imgSrc: './images/slide1.jpg',
        imgAlt: 'slide',
        title: 'Get Garden Fresh Fruits',
        marker: 'Natural!!',
        colorText: '#FFFFFF',
        colorMarker: '#FFFFFF'
    },
    {
        id: '4',
        imgSrc: './images/slide2.jpg',
        imgAlt: 'slide',
        title: 'Get 10% off on Vegetables',
        marker: 'Offer!!',
        colorText: '#274C5B',
        colorMarker: '#7EB693'
    }
]

function Main() {

    return (
        <>
            <Header />
            <Banner />
            <BannerAboutUs />
            <OurProducts/>
            <div className='option_goods'>
                <div className='option'>
                    <picture>
                            <source media="(max-width: 692px)" srcSet="../images/Fruit_Juice_mob.jpg"/>
                            <img srcSet="./images/Fruit_Juice.jpg" alt="Fruit_Juice"/>
                    </picture>
                    <a href="#">Fruit Juice</a>
                </div>
                <div className='option'>
                    <picture>
                            <source media="(max-width: 692px)" srcSet="./images/Organic_Food_mob.jpg"/>
                            <img srcSet="./images/Organic_Food.jpg" alt="Organic_Food"/>
                    </picture>
                    <a href="#">Organic Food</a>
                </div>
                <div className='option'>
                    <picture>
                            <source media="(max-width: 692px)" srcSet="./images/Nuts_Cookies_mob.jpg"/>
                            <img srcSet="./images/Nuts_Cookies.jpg" alt="Nuts_Cookies"/>
                    </picture>
                    <a href="#">Nuts Cookies</a>
                </div>
            </div>
        </>
    )
}

export default Main;