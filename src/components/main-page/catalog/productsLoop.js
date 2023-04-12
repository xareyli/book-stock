import style from './style.scss';

import BookCard from '../../book-card';
import LoadingIndication from '../../ui/loading-indication';

const ProductsLoop = ({ isLoading, products }) => (
    <>
        {!isLoading &&
            products.map((item, index) => (
                <BookCard key={item.id} className={style.productsGrid__item} book={item} />
            ))}

        {products.length === 0 ? 'nOthing found :(' : ''}

        {isLoading ? <LoadingIndication className={style.loader} /> : ''}
    </>
);

export default ProductsLoop;
