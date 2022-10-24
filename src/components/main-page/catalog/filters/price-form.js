import { useState, useEffect, useCallback } from 'preact/hooks';
import { Field } from 'react-final-form';
import { getTrackBackground, Range } from 'react-range';
import style from './style.scss';

const PriceForm = ({ minPrice, maxPrice, form }) => {
    const [rangeValues, setRangeValues] = useState([minPrice, maxPrice]);

    useEffect(() => {
        if (minPrice !== maxPrice) setRangeValues([minPrice, maxPrice]);
        else setRangeValues([minPrice - 1, maxPrice + 1]);
    }, [minPrice, maxPrice]);

    const onRangeChanges = useCallback(values => {
        setRangeValues(values);

        form.change('fromPrice', values[0]);
        form.change('toPrice', values[1]);
        form.submit();
    }, []);

    return (
        <div class={style.priceSlider}>
            <Field
                name="price"
                render={({ input }) => (
                    <>
                        <Range
                            draggableTrack
                            values={rangeValues}
                            step={1}
                            min={minPrice}
                            max={maxPrice}
                            onChange={onRangeChanges}
                            renderTrack={({ props, children }) => (
                                <div
                                    onMouseDown={props.onMouseDown}
                                    onTouchStart={props.onTouchStart}
                                    class={style.priceSlider__sliderContainer}
                                    style={{
                                        ...props.style,
                                    }}
                                >
                                    <input {...input} type="hidden" />
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
                    </>
                )}
            />
        </div>
    );
};

export default PriceForm;
