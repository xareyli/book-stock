import style from './style.scss';

import BookCard from '../../book-card';
import Pagination from '../../pagination';

const Stock = ({ className }) => (
    <>
        <div class={`${style.grid} ${className}`}>
            <BookCard className={style.grid__item} isStock />
            <BookCard className={style.grid__item} isStock />
            <BookCard className={style.grid__item} isStock />
            <BookCard className={style.grid__item} isStock />
            <BookCard className={style.grid__item} isStock />
            <BookCard className={style.grid__item} isStock />
        </div>

        <Pagination className={style.stock__pagination} />
    </>
);

export default Stock;
