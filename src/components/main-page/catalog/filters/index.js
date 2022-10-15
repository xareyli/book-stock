import GenresForm from './genres-form';
import PriceForm from './price-form';
import style from './style.scss';

const Filters = ({ className }) => {
    function gonnaOpenModal() {
        const beforeOpenModalEvent = new Event('beforeOpenModal');

        window.dispatchEvent(beforeOpenModalEvent);
    }

    return (
        <form class={`${className} ${style.filters}`} onSubmit={e => e.preventDefault()}>
            <PriceForm className={style.filters__item} gonnaOpenModal={gonnaOpenModal} />
            <GenresForm className={style.filters__item} gonnaOpenModal={gonnaOpenModal} />
        </form>
    );
};

export default Filters;
