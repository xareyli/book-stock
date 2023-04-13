import { useCallback } from 'preact/hooks';
import Button from '../../ui/button';
import style from './style.scss';

const Promo = () => {
    const catalogCallback = useCallback(() => {
        const event = new Event('scrollToCatalog');

        document.dispatchEvent(event);
    }, []);

    return (
        <section class={style.promo}>
            <div class={`${style.promo__blackout} _blackout _blackout--visible`} />
            <div class={`${style.promo__wrapper} _container`}>
                <h2 class={style.promo__title}>
                    <em>Ваши любимые книги</em>
                    <br />
                    НА КАЖДЫЙ ДЕНЬ
                </h2>

                <div class={`${style.promo__quote} ${style.quote}`}>
                    <p class={style.quote__text}>
                        Человек, который читает, проживает тысячу
                        <br />
                        жизней. Тот, кто не читает, проживает лишь
                        <br />
                        одну.
                    </p>

                    <div class={style.quote__author}>
                        <span>Дж.Мартин</span>
                    </div>
                </div>

                <Button onClick={catalogCallback}>Каталог</Button>
            </div>
        </section>
    )
}

export default Promo;
