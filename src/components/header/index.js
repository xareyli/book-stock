import { Link } from 'preact-router/match';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import style from './style.scss';

import Authentication from '../authentication/';
import Popup from '../ui/popup';
import SlideoutMenu from '../slideout-menu';
import navLinks from '../../constants/nav-links';

const Header = () => {
    const headerElement = useRef(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isSlideoutOpen, setIsSlideoutOpen] = useState(false);

    const hidePopup = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const toggleSlideout = useCallback(() => {
        setIsSlideoutOpen(prev => !prev);
    }, []);

    useEffect(() => {
        if (headerElement.current) {
            const callback = entries => {
                if (entries[0].isIntersecting) {
                    headerElement.current.classList.remove(style._scroll);
                } else {
                    headerElement.current.classList.add(style._scroll);
                }
            };

            const headerObserver = new IntersectionObserver(callback);

            headerObserver.observe(headerElement.current);
        }
    }, [headerElement.current]);

    return (
        <>
            <header class={style.header} ref={headerElement}>
                <div class={`${style.header__wrapper}`}>
                    <div class={`${style.header__content} _container`}>
                        <button
                            class={`${style.header__burger} ${style.burgerBtn}`}
                            onClick={toggleSlideout}
                        >
                            <span />
                        </button>

                        <h1 class={style.header__logo}>
                            <a href="#">
                                <em>book</em>stock
                            </a>
                        </h1>

                        <nav class={`${style.header__nav} ${style.navigation}`}>
                            <ul class={style.navigation__list}>
                                {navLinks.map(item =>
                                    <li class={style.navigation__item}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                )}
                            </ul>
                        </nav>

                        <div class={`${style.header__actions} ${style.actions}`}>
                            <button class={`${style.actions__item} icon-heart`} />
                            <button
                                onClick={() => setIsAuthModalOpen(true)}
                                class={`${style.actions__item} icon-profile`}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <Popup isShown={isAuthModalOpen} hide={hidePopup}>
                <Authentication />
            </Popup>

            <SlideoutMenu
                isOpen={isSlideoutOpen}
                setIsOpen={setIsSlideoutOpen}
            />
        </>
    );
};

export default Header;
