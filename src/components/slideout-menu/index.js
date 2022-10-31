import style from './style.scss';

import crossImg from '../../assets/image/slideout-menu/cross.svg';
import { useCallback, useEffect } from 'preact/hooks';
import navLinks from '../../constants/nav-links';
import { Link } from 'preact-router';


const SlideoutMenu = ({ isOpen, setIsOpen }) => {
    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    useEffect(() => {
        const onDocumentClick = e => {
            const isMenuOpen = document.querySelector(`.${style['slideoutMenu--open']}`);

            if (isMenuOpen && !e.target.closest(`.${style.slideoutMenu}`)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, []);

    return (
        <>
            <div class={`${style.slideoutMenu} ${isOpen ? style['slideoutMenu--open'] : ''}`}>
                <button
                    class={style.slideoutMenu__closeBtn}
                    onClick={closeMenu}
                >
                    <img src={crossImg} />
                </button>

                <div class={style.slideoutMenu__content}>
                    <div class={style.linksList}>
                        {navLinks.map(item =>
                            <Link
                                onClick={closeMenu}
                                class={style.linksList__item}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div class={`${style.blackout} _blackout ${isOpen ? '_blackout--visible' : ''}`} />
        </>
    )
}

export default SlideoutMenu;
