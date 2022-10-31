import { Link } from 'preact-router/match';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import style from './style.scss';

import Authentication from '../authentication/';
import Popup from '../ui/popup';

const Header = () => {
    const headerElement = useRef(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const hidePopup = useCallback(() => {
        setIsAuthModalOpen(false);
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
                        <button class={`${style.header__burger} ${style.burgerBtn}`}>
                            <span />
                        </button>

                        <h1 class={style.header__logo}>
                            <a href="#">
                                <em>book</em>stock
                            </a>
                        </h1>

                        <nav class={`${style.header__nav} ${style.navigation}`}>
                            <ul class={style.navigation__list}>
                                <li class={style.navigation__item}>
                                    <Link href="/">Главная</Link>
                                </li>
                                <li class={style.navigation__item}>
                                    <a href="#">Каталог</a>
                                </li>
                                <li class={style.navigation__item}>
                                    <Link href="/cafeteria">Кофейня</Link>
                                </li>
                                <li class={style.navigation__item}>
                                    <a href="#">Акции</a>
                                </li>
                                <li class={style.navigation__item}>
                                    <a href="#">Контакты</a>
                                </li>
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
        </>
    );
};

export default Header;
