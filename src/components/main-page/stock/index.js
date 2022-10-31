import { useCallback, useEffect, useState } from 'preact/hooks';
import style from './style.scss';

import { getBooks } from '../../../api/books';
import BookCard from '../../book-card';
import Pagination from '../../ui/pagination';
import SectionTemplate from '../section-template';

let perPage = 3;

if (document.documentElement.offsetWidth >= 767) perPage = 6;
else if (document.documentElement.offsetWidth >= 480) perPage = 4;

const Stock = ({ className }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        booksCount: null,
    });

    useEffect(() => {
        async function fetchBooks() {
            const response = await getBooks({ pagination: { ...pagination, perPage }, onSale: true });

            setProducts(response.books);
            setPagination({ ...pagination, booksCount: response.totalCount });
            setIsLoading(false);
        }

        setIsLoading(true);
        fetchBooks();
    }, [pagination.page]);

    const setPage = useCallback(page => setPagination({ ...pagination, page }), []);

    return (
        <SectionTemplate title="АКЦИИ">
            <div class={`${style.grid} ${className}`}>
                {products.map(item => (
                    <BookCard key={item.id} className={style.grid__item} book={item} isStock />
                ))}

                {isLoading ? 'Загрузка...' : ''}
            </div>

            {pagination.booksCount && (
                <Pagination
                    className={style.stock__pagination}
                    setPage={setPage}
                    pagination={{
                        page: pagination.page,
                        totalCount: pagination.booksCount,
                        perPage,
                    }}
                />
            )}
        </SectionTemplate>
    );
};

export default Stock;
