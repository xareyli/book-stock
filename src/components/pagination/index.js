import style from './style.scss';

// Props: itemsCount, perPage, offset, onTurning
const Pagination = ({ className }) => (
    <div class={`${style.pagination} ${className}`}>
        <span class={style.pagination__item}>1</span>
        <span class={style.pagination__item}>2</span>
        <span class={style.pagination__item}>3</span>
        <span class={style.pagination__item}>4</span>
        <span class={style.pagination__item}>5</span>
        <span class={style.pagination__dot} />
        <span class={style.pagination__dot} />
        <span class={style.pagination__dot} />
        <span class={style.pagination__dot} />
        <span class={style.pagination__dot} />
    </div>
);

export default Pagination;
