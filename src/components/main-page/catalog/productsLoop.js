import style from './style.scss';

import BookCard from '../../book-card';

const ProductsLoop = ({ isLoading, products }) => (
    <>
        {!isLoading &&
            products.map((item, index) => (
                <BookCard key={item.id} className={style.productsGrid__item} book={item} />
            ))}

        {products.length === 0 ? 'nOthing found :(' : ''}

        {isLoading ? 'Загрузка...' : ''}
    </>
);

export default ProductsLoop;
