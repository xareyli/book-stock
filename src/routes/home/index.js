import style from './style.scss';

import cafeteriaImg from '../../assets/image/cafeteria/img.png';
import contactsBg from '../../assets/image/main-page/contacts/bg.png';
import contactsMap from '../../assets/image/main-page/contacts/map.png';

import DescribedImage from '../../components/described-image';
import Catalog from '../../components/main-page/catalog';
import SectionTemplate from '../../components/main-page/section-template';
import Stock from '../../components/main-page/stock';
import BlockTitle from '../../components/ui/block-title';
import Button from '../../components/ui/button';

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

        <SectionTemplate title="КОФЕЙНЯ">
            <br />
            <DescribedImage
                text="Что может быть приятнее, чем, устроившись поудобнее с чашечкой кофе в руках,
                        почитать часок-другой книгу? Именно у нас вы сможете не только вкусно поесть,
                        но и уделить время чтению книг,
                        в изобилии разместившихся на полках. Места хватит для всех, так как у нас есть целых три зала!"
                href="/cafeteria"
                linkText="Больше информации"
                img={cafeteriaImg}
            />
        </SectionTemplate>

        <Stock className={style.stock__content} />

        <section class={`${style.homeSection} ${style.contacts}`}>
            <div class="_container">
                <BlockTitle>КОНТАКТЫ</BlockTitle>
            </div>

            <div class={`${style.contacts__content} _ibg`} style={{ backgroundImage: `url(${contactsBg})` }}>
                <div class={`_container ${style.contacts__grid}`}>
                    <h2 class={style.contacts__title}>
                        Свяжитесь с нами удобным для Вас способом, будем рады сотрудничеству!
                    </h2>

                    <div class={`${style.contacts__map} _ibg`} style={{ backgroundImage: `url(${contactsMap})` }} />

                    <div class={style.contacts__contactsList}>
                        <div class={`${style.contacts__contactItem} ${style.contactItem}`}>
                            <span class={style.contactItem__key}>Звоните по номеру :</span>
                            <a href="tel:+7919651892" class={style.contactItem__value}>
                                <i class="icon-phone" /> 7919651892
                            </a>
                        </div>

                        <div class={`${style.contacts__contactItem} ${style.contactItem}`}>
                            <span class={style.contactItem__key}>Мы находимся по адресу :</span>
                            <span class={style.contactItem__value}>
                                <i class="icon-map-pointer" /> Г. Санкт-Петербург, проспект Добролюбова 47а
                            </span>
                        </div>

                        <div class={`${style.contacts__contactItem} ${style.contactItem}`}>
                            <span class={style.contactItem__key}>Электронная почта :</span>
                            <span class={style.contactItem__value}>
                                <i class="icon-mail-big" /> bookstocksaint-p@gmail.com
                            </span>
                        </div>

                        <div class={`${style.contacts__contactItem} ${style.contactItem}`}>
                            <span class={style.contactItem__key}>Наши соц сети :</span>
                            <span class={`${style.contactItem__value} ${style['contactItem__value--icons-list']}`}>
                                <a href="#">
                                    <i class="icon-instagram" />
                                </a>
                                <a href="#">
                                    <i class="icon-tiktok" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
