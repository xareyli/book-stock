import { Link } from 'preact-router/match';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import style from './style.scss';

import SlideoutMenu from '../slideout-menu';
import navLinks from '../../constants/nav-links';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupState } from '../../redux/reducers/AuthSlice';

const Header = () => {
    const headerElement = useRef(null);
    const [isSlideoutOpen, setIsSlideoutOpen] = useState(false);
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    const toggleSlideout = useCallback(() => {
        setIsSlideoutOpen(prev => !prev);
    }, []);

    const openAuthModal = useCallback(() => {
        dispatch(setPopupState(true));
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
                            <Link href={isAuth ? "/cart" : ""} class={style.actions__item}>
                                <button class="icon-heart"></button>
                            </Link>

                            <button
                                onClick={openAuthModal}
                                class={`${style.actions__item} icon-profile`}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <SlideoutMenu
                isOpen={isSlideoutOpen}
                setIsOpen={setIsSlideoutOpen}
            />
        </>
    );
};

export default Header;
