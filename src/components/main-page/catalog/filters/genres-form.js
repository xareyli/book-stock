import { useState, useEffect, useCallback } from 'preact/hooks';
import style from './style.scss';

const GenresForm = ({ className, gonnaOpenModal }) => {
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

    /**
     * @TODO move genres to redux
     */

    return (
        <div
            class={`
                ${className}
                ${style.genreForm}
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
                    <span>Жанр</span>
                    <svg width="11" height="8" viewBox="0 0 9 7" fill="none">
                        <path d="M7.53109 0.75L4.5 6L1.46891 0.749999L7.53109 0.75Z" stroke="black" />
                    </svg>
                </button>

                <button class={style.formOption__closeModal} onClick={() => setIsModalOpen(false)} />
            </div>

            <div class={`${style.genreForm__list} ${style.formOption__content}`}>
                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Детективы
                </label>

                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Романы
                </label>

                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Научные
                </label>

                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Классика
                </label>

                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Исторические
                </label>

                <label class={style.genreForm__item}>
                    <input type="checkbox" />
                    <i class="icon-checkmark" />
                    Психологические
                </label>
            </div>
        </div>
    );
};

export default GenresForm;
