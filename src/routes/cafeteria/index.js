import style from './style.scss';
import 'swiper/swiper.min';

import pageBg from '../../assets/image/cafeteria-page/bg.png';
import cafeteriaImg from '../../assets/image/cafeteria/img.png';
import BlockTitle from '../../components/block-title';

import Gallery from '../../components/cafeteria-page/gallery';
import DescribedImage from '../../components/described-image';

const Cafeteria = () => (
    <main class={`${style.page} _ibg`} style={{ backgroundImage: `url(${pageBg})` }}>
        <section class={style.section}>
            <div class="_container">
                <DescribedImage
                    text={`Что может быть приятнее, чем, устроившись поудобнее с чашечкой кофе в руках,
                                почитать часок-другой книгу? Именно у нас вы сможете не только вкусно поесть,
                                но и уделить время чтению книг,
                                в изобилии разместившихся на полках.
                                Места хватит для всех, так как у нас есть целых три зала!`}
                    textColor="white"
                    img={cafeteriaImg}
                />
            </div>
        </section>

        <section class={style.section}>
            <div class="_container">
                <BlockTitle color="white">НАШИ ФОТОСТОКИ</BlockTitle>

                <Gallery />
            </div>
        </section>
    </main>
);

export default Cafeteria;
