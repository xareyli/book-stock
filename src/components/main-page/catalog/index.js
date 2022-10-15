import Filters from './filters';
import style from './style.scss';

import BlockTitle from '../../block-title/';
import BookCard from '../../book-card';
import SearchInput from '../../search-input';

const Catalog = ({ className }) => (
    <section class={`${style.catalog} ${className}`}>
        <div class="_container">
            <BlockTitle>Каталог</BlockTitle>

            <div class={style.catalog__grid}>
                <div class={style.catalog__filtersWrapper}>
                    <span class={`${style.catalog__filtersTitle} ${style.filtersTitle}`}>Фильтры</span>

                    <Filters className={`${style.catalog__filters} ${style.filters}`} />
                </div>

                <div class={style.catalog__productsWrapper}>
                    <div class={style.searchSort}>
                        <div class={style.searchSort__sortWrapper}>
                            <button class={`${style.searchSort__sort} ${style['searchSort__sort--active']}`}>
                                По популярности
                            </button>
                            <button class={style.searchSort__sort}>По рейтингу</button>
                        </div>

                        <SearchInput className={style.searchSort__search} />
                    </div>

                    <div class={`${style.catalog__productsGrid} ${style.productsGrid}`}>
                        <BookCard className={style.productsGrid__item} />
                        <BookCard className={style.productsGrid__item} />
                        <BookCard className={style.productsGrid__item} />
                        <BookCard className={style.productsGrid__item} />
                        <BookCard className={style.productsGrid__item} />
                        <BookCard className={style.productsGrid__item} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Catalog;
