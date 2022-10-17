import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

import { getBooksInStock } from '../../../api/books';
import BookCard from '../../book-card';
import Pagination from '../../pagination';

const Stock = ({ className }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            setProducts(await getBooksInStock());
        }

        fetchBooks();
    }, []);

    return (
        <>
            <div class={`${style.grid} ${className}`}>
                {products.map(item => (
                    <BookCard key={item.id} className={style.grid__item} book={item} isStock />
                ))}
            </div>

            <Pagination className={style.stock__pagination} />
        </>
    );
};

export default Stock;
