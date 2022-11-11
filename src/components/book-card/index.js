import style from './style.scss';

import IBG from '../ibg';
import { Link } from 'preact-router/match';
import HeartBtn from '../ui/heart-btn';
import { useSelector } from 'react-redux';
import { useCallback } from 'preact/hooks';
import { route } from 'preact-router';
import useAddBookToCart from '../../hooks/useAddBookToCart';

const BookCard = ({ className, book }) => {
    const isInCart = useSelector(state => state.cartReducer.cartElements.find(item => item.id === book.id));
    const addToCart = useAddBookToCart(book);

    let ratingStars = [];

    const isStock = book.salePrice;

    for (let i = 0; i < 5; i++) {
        if (i < book.rating) {
            ratingStars.push(<i class={`icon-star ${style.card__star}`} />);
        } else {
            ratingStars.push(<i class={`icon-star-empty ${style.card__star} ${style['card__star--empty']}`} />);
        }
    }

    const onBuyBtnClick = useCallback(() => {
        addToCart(() => route('/cart'));
    }, [addToCart]);

    return (
        <article class={`${className} ${style.card}`}>
            <Link href={`/book/${book.id}`}>
                <IBG className={style.card__img} img={book.img} />
            </Link>

            <div class={style.card__content}>
                <div class={style.card__rating}>
                    <div class={style.card__starWrapper}>{ratingStars.map(item => item)}</div>

                    {isStock ? (
                        <HeartBtn className={style.card__heart} checked={isInCart} book={book} />
                    ) : (
                        <span class="rating-number">{book.ratingNumber}</span>
                    )}
                </div>

                <div class={style.card__metaWrapper}>
                    <span class={style.card__name}>{book.name}</span>
                    <span class={style.card__author}>Автор: {book.author}</span>
                    <span class={style.card__year}>{book.year} г</span>
                </div>

                <div class={style.card__footer}>
                    <button class={style.card__buyBtn} onClick={onBuyBtnClick}>Купить</button>

                    <span class={`${style.card__price} ${isStock ? style['card__price--old'] : ''}`}>
                        {book.price} Р
                    </span>

                    {isStock ? (
                        <span class={style.card__newPrice}>{book.salePrice} Р</span>
                    ) : (
                        <HeartBtn className={style.card__heart} checked={isInCart} book={book} />
                    )}
                </div>
            </div>
        </article>
    );
};

export default BookCard;
