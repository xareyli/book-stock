import style from './style.scss';

import img from '../../assets/image/cafeteria/img.png';

import BlockTitle from '../../components/block-title';
import Button from '../../components/button';
import DescribedImage from '../../components/described-image';
import Catalog from '../../components/main-page/catalog';
import Stock from '../../components/main-page/stock';

const Home = () => (
    <main>
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

                <Button>Каталог</Button>
            </div>
        </section>

        <Catalog className={style.homeSection} />

        <section class={`${style.homeSection} ${style.cafeteria}`}>
            <div class="_container">
                <BlockTitle>КОФЕЙНЯ</BlockTitle>
                <br />
                <DescribedImage
                    text="Что может быть приятнее, чем, устроившись поудобнее с чашечкой кофе в руках,
                        почитать часок-другой книгу? Именно у нас вы сможете не только вкусно поесть,
                        но и уделить время чтению книг,
                        в изобилии разместившихся на полках. Места хватит для всех, так как у нас есть целых три зала!"
                    linkText="Больше информации"
                    img={img}
                />
            </div>
        </section>

        <section class={`${style.homeSection} ${style.stock}`}>
            <div class="_container">
                <BlockTitle>АКЦИИ</BlockTitle>

                <Stock className={style.stock__content} />
            </div>
        </section>
    </main>
);

export default Home;
