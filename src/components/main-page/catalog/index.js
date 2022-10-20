import { useCallback, useEffect, useReducer, useState } from 'preact/hooks';
import Filters from './filters';
import Sort from './sort';
import style from './style.scss';

import { getBooks } from '../../../api/books';
import sortTypes from '../../../constants/sortTypes';
import throttle from '../../../helpers/throttle';
import BlockTitle from '../../block-title/';
import BookCard from '../../book-card';
import Pagination from '../../pagination';
import SearchInput from '../../search-input';

const initialState = {
    genres: [],
    search: '',
    sortType: Object.keys(sortTypes)[0],
};

const productSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'changeGenres':
            return { ...state, genres: action.payload };

        case 'changeSearch':
            return { ...state, search: action.payload };

        case 'changeSort':
            return { ...state, sortType: action.payload };

        default:
            return state;
    }
};

const Catalog = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [productSettings, dispatch] = useReducer(productSettingsReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBooksRaw = useCallback(async (search, genres, sortType) => {
        setProducts(await getBooks({ search, genres, sortType }));
        setIsLoading(false);
    });

    const fetchBooks = useCallback(throttle(fetchBooksRaw, 500), []);

    useEffect(() => {
        setIsLoading(true);
        fetchBooks(productSettings.search, productSettings.genres, productSettings.sortType);
    }, [productSettings]);

    /**
     * @TODO move <section><div class="_container"><BlockTitle></BlockTitle></div></section> to the template
     */
    return (
        <section class={`${style.catalog} ${className}`}>
            <div class="_container">
                <BlockTitle>Каталог</BlockTitle>

                <div class={style.catalog__grid}>
                    <div class={style.catalog__filtersWrapper}>
                        <span class={`${style.catalog__filtersTitle} ${style.filtersTitle}`}>Фильтры</span>

                        {
                            <Filters
                                className={`${style.catalog__filters} ${style.filters}`}
                                genres={productSettings.genres}
                                setGenres={newGenres => dispatch({ type: 'changeGenres', payload: newGenres })}
                            />
                        }
                    </div>

                    <div class={style.catalog__productsWrapper}>
                        <div class={style.searchSort}>
                            <Sort
                                sortType={productSettings.sortType}
                                changeSortType={newValue => dispatch({ type: 'changeSort', payload: newValue })}
                            />

                            <SearchInput
                                className={style.searchSort__search}
                                value={productSettings.search}
                                onChange={newValue => dispatch({ type: 'changeSearch', payload: newValue })}
                            />
                        </div>

                        <div class={`${style.catalog__productsGrid} ${style.productsGrid}`}>
                            {!isLoading &&
                                products.map((item, index) => (
                                    <BookCard
                                        key={item.id}
                                        className={style.productsGrid__item}
                                        number={index + 1}
                                        book={item}
                                        isStock={item.salePrice}
                                    />
                                ))}

                            {products.length === 0 ? 'nOthing found :(' : ''}

                            {isLoading ? 'Загрузка...' : ''}
                        </div>
                    </div>
                </div>

                <Pagination className={style.catalog__pagination} />
            </div>
        </section>
    );
};

export default Catalog;
