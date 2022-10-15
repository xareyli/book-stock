import style from './style.scss';

const Header = () => (
    <header class={style.header}>
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
                            <a href="#">Главная</a>
                        </li>
                        <li class={style.navigation__item}>
                            <a href="#">Каталог</a>
                        </li>
                        <li class={style.navigation__item}>
                            <a href="#">Кофейня</a>
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
                    <button class={`${style.actions__item} icon-profile`} />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
