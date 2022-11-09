import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

import { getOneBook } from '../../api/books';
import Button from '../../components/ui/button';
import useAddBookToCart from '../../hooks/useAddBookToCart';

const Book = ({ id }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            setBook(await getOneBook(id));
        };

        fetchBook();
    }, []);

    if (!book) {
        return <>loading...</>;
    }

    const ratingStars = [];

    for (let i = 0; i < 5; i++) {
        if (book.rating > i) {
            ratingStars.push(<i class={`icon-star ${style.metaField__star}`} />);
        } else {
            ratingStars.push(
                <i class={`icon-star-empty ${style.metaField__star} ${style['metaField__star--empty']}`} />,
            );
        }
    }

    const bookDescription = (
        <>
            <p>{book.description.slice(0, 300)}</p>
            <p>{book.description.slice(300, 700)}</p>
            <p>{book.description.slice(700)}</p>
        </>
    );

    const onAddToCart = useAddBookToCart(book);

    return (
        <main class={style.page}>
            <div class={`${style.page__blackout} _blackout _blackout--visible`} />

            <div class={`${style.page__background} _ibg`} style={{ backgroundImage: `url(/${book.bgImg})` }} />

            <div class={`${style.page__content} ${style.article} _container`}>
                <div class={style.articleMeta}>
                    <div class={`${style.articleMeta__img} _ibg`} style={{ backgroundImage: `url(/${book.img})` }} />

                    <div class={`${style.articleMeta__info} ${style.articleMetaInfo}`}>
                        <div class={style.metaField}>
                            <span class={style.metaField__key}>Название :</span>
                            <span class={style.metaField__value}>{book.name}</span>
                        </div>

                        <div class={style.metaField}>
                            <span class={style.metaField__key}>Автор :</span>
                            <span class={style.metaField__value}>{book.author}</span>
                        </div>

                        <div class={style.metaField}>
                            <span class={style.metaField__key}>Год :</span>
                            <span class={style.metaField__value}>{book.year}</span>
                        </div>

                        <div class={style.metaField}>
                            <span class={style.metaField__key}>Рейтинг :</span>
                            <div class={style.metaField__value}>
                                <div class={style.metaField__starWrapper}>{ratingStars.map(item => item)}</div>
                                <span class="rating-number">{book.ratingNumber}</span>
                            </div>
                        </div>

                        <div class={style.articleMetaInfo__footer}>
                            <Button onClick={onAddToCart}>Купить</Button>

                            <span
                                class={`${style.articleMetaInfo__price} ${
                                    book.salePrice && style['articleMetaInfo__price--sale']
                                }`}
                            >
                                {book.price} Р
                            </span>
                            {book.salePrice ? (
                                <span class={style.articleMetaInfo__salePrice}>{book.salePrice} Р</span>
                            ) : (
                                ''
                            )}

                            <button class={`${style.articleMetaInfo__heart} icon-heart-empty`} onClick={onAddToCart} />
                        </div>
                    </div>
                </div>

                <div class={style.article__textWrapper}>
                    <h3 class={style.article__textTitle}>Описание :</h3>

                    <div class={style.article__text}>{bookDescription}</div>
                </div>
            </div>
        </main>
    );
};

export default Book;
