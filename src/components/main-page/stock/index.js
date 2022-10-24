import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

import { getBooks } from '../../../api/books';
import BookCard from '../../book-card';
import Pagination from '../../pagination';
import SectionTemplate from '../section-template';

const Stock = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchBooks() {
            setProducts((await getBooks({ onSale: true })).books);
            setIsLoading(false);
        }

        setIsLoading(true);
        fetchBooks();
    }, []);

    return (
        <SectionTemplate title="АКЦИИ">
            <div class={`${style.grid} ${className}`}>
                {products.map(item => (
                    <BookCard key={item.id} className={style.grid__item} book={item} isStock />
                ))}

                {isLoading ? 'Загрузка...' : ''}
            </div>

            <Pagination className={style.stock__pagination} />
        </SectionTemplate>
    );
};

export default Stock;
