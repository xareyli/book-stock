import style from './style.scss';

import img from '../../assets/card-mock.png';
import Button from '../button';
import IBG from '../ibg';

const BookCard = ({ className, isStock = false }) => (
    <article class={`${className} ${style.card}`}>
        <IBG className={style.card__img} img={img} />

        <div class={style.card__content}>
            <div class={style.card__rating}>
                <div class={style.card__starWrapper}>
                    <i class={`icon-star ${style.card__star}`} />
                    <i class={`icon-star ${style.card__star}`} />
                    <i class={`icon-star ${style.card__star}`} />
                    <i class={`icon-star ${style.card__star}`} />
                    <i class={`icon-star ${style.card__star}`} />
                </div>

                {isStock ? <i class={`icon-heart-empty ${style.card__heart}`} /> : <span class="rating-number">1</span>}
            </div>

            <div class={style.card__metaWrapper}>
                <span class={style.card__name}>Девушка с татуировкой дракона</span>
                <span class={style.card__author}>Автор: Стиг Ларссон</span>
                <span class={style.card__year}>2005 г</span>
            </div>

            <div class={style.card__footer}>
                <Button className={style.card__buyBtn}>Купить</Button>

                <span class={style.card__price}>2650 Р</span>

                {isStock ? (
                    <span class={style.card__newPrice}>2350 Р</span>
                ) : (
                    <i class={`${style.card__heart} icon-heart-empty`} />
                )}
            </div>
        </div>
    </article>
);

export default BookCard;
