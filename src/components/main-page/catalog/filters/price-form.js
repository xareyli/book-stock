import { useState, useEffect, useCallback } from 'preact/hooks';
import style from './style.scss';

const PriceForm = ({ className, gonnaOpenModal }) => {
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

            <div class={`${style.priceForm__slider} ${style.formOption__content}`}>slider</div>
        </div>
    );
};

export default PriceForm;
