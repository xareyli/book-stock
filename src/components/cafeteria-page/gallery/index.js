import { useRef } from 'preact/hooks';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.scss';

import carouselImg1 from '../../../assets/image/cafeteria-page/gallery-slider/img-1.png';
import carouselImg2 from '../../../assets/image/cafeteria-page/gallery-slider/img-2.png';
import carouselImg3 from '../../../assets/image/cafeteria-page/gallery-slider/img-3.png';

const slides = {
    1: carouselImg1,
    2: carouselImg2,
    3: carouselImg3,
};

const Gallery = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div class={style.galleryWrapper}>
            <button
                class={`${style.gallery__arrow} ${style['gallery__arrow--prev']} icon-slider-arrow`}
                ref={navigationPrevRef}
            />
            <button
                class={`${style.gallery__arrow} ${style['gallery__arrow--next']} icon-slider-arrow`}
                ref={navigationNextRef}
            />

            <Swiper
                className={`${style.gallery} gallery-slider`}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides
                loop
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={swiper => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 25,
                        navigation: {
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        },
                    },
                    1000: {
                        spaceBetween: 80,
                        navigation: {
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        },
                    },
                }}
            >
                {Object.keys(slides).map(number => (
                    <SwiperSlide key={number} className={style.gallery__slide}>
                        {({ isActive, isPrev, isNext }) => (
                            <div
                                class={`
                                ${style.gallery__img}
                                ${isActive && style['gallery__img--active']}
                                ${isPrev && style['gallery__img--prev']}
                                ${isNext && style['gallery__img--next']}
                                _ibg
                            `}
                                style={{ backgroundImage: `url(${slides[number]})` }}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
