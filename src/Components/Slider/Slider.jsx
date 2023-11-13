import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Slider.scss';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";



export default function Slider({ slides }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            cssMode={true}
            navigation={true}
            pagination={pagination}
            mousewheel={true}
            keyboard={true}
            loop={true}
            slidesPerView={2}
            spaceBetween={0}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
              }}
            className="slider"
        >{slides.map(el => (
            <SwiperSlide key={el.id} className='slide'>
                <div className='item'>
                    <div className="item_background">
                        <img srcSet={el.imgSrc} alt={el.imgAlt} />
                    </div>
                    <div className="item_content">
                        <h3 style={{ color: `${el.colorMarker}` }}>{el.marker}</h3>
                        <h1 style={{ color: `${el.colorText}` }}>{el.title}</h1>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
};