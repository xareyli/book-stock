import style from './style.scss';

import Catalog from '../../components/main-page/catalog';
import Promo from '../../components/main-page/promo';

const Home = () => (
    <main>
        <Promo />
        <Catalog className={style.homeSection} />
    </main>
);

export default Home;
