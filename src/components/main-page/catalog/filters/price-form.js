import { useState, useEffect, useCallback } from 'preact/hooks';
import { getTrackBackground, Range } from 'react-range';
import style from './style.scss';

const PriceForm = ({ className, gonnaOpenModal, minPrice, maxPrice, rangeValues, setRangeValues }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const beforeOpenModalListener = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    useEffect(() => {
        window.addEventListener('beforeOpenModal', beforeOpenModalListener);

        return () => {
            window.removeEventListener('beforeOpenModal', beforeOpenModalListener);
        };
    }, []);

    return (
        <div
            class={`
                ${className}
                ${style.priceForm}
                ${style.formOption}
                ${isModalOpen ? style['formOption--open'] : ''}
                `}
        >
            <div class={style.formOption__header}>
                <button
                    class={`${style.formTitle} ${style.genreForm__title}`}
                    type="button"
                    onClick={() => {
                        gonnaOpenModal();
                        setIsModalOpen(true);
                    }}
                >
                    <span>Цена</span>
                    <svg width="11" height="8" viewBox="0 0 9 7" fill="none">
                        <path d="M7.53109 0.75L4.5 6L1.46891 0.749999L7.53109 0.75Z" stroke="black" />
                    </svg>
                </button>

                <button class={style.formOption__closeModal} onClick={() => setIsModalOpen(false)} />
            </div>

            <div class={`${style.priceForm__slider} ${style.formOption__content} ${style.priceSlider}`}>
                <Range
                    draggableTrack
                    values={rangeValues}
                    step={1}
                    min={minPrice}
                    max={maxPrice}
                    onChange={values => setRangeValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            class={style.priceSlider__sliderContainer}
                            style={{
                                ...props.style,
                            }}
                        >
                            <div
                                ref={props.ref}
                                class={style.priceSlider__center}
                                style={{
                                    background: getTrackBackground({
                                        values: rangeValues,
                                        colors: ['#2D2D2D', '#0A62A9', '#2D2D2D'],
                                        min: minPrice,
                                        max: maxPrice,
                                        rtl: false,
                                    }),
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => <div {...props} class={style.priceSlider__thumb} />}
                />

                <div class={style.priceSlider__labels}>
                    <span>{rangeValues[0]} Р</span>
                    <span>{rangeValues[1]} Р</span>
                </div>
            </div>
        </div>
    );
};

export default PriceForm;
