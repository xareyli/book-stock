import style from './style.scss'

import mockImg from '../../../assets/books/img-1.png';
import masterCardImg from '../../../assets/image/cart-page/master-card.png';
import visaImg from '../../../assets/image/cart-page/visa.png';
import Counter from '../../ui/counter';
import { useDispatch } from 'react-redux';
import { addElement, removeElement } from '../../../redux/reducers/CartSlice';
import { useCallback } from 'preact/hooks';


const CartItem = ({ className, book }) => {
    const dispatch = useDispatch();

    const onIncreaseCount = useCallback(() => {
        dispatch(addElement(book));
    }, []);

    const onDecreaseCount = useCallback(() => {
        dispatch(removeElement(book));
    }, []);

    return (
        <div class={`${style.cartItem} ${className}`}>
            <div class={style.cartItem__checkbox}>
                <label class={style.checkbox}>
                    <span class="icon-checkmark" />
                    <input type="checkbox" />
                </label>
            </div>

            <div class={style.cartItem__img}>
                <div
                    class="_ibg"
                    style={{ backgroundImage: `url(${book.img})` }}
                />
            </div>

            <div class={`${style.cartItem__content} ${style.itemContent}`}>
                <div class={style.itemContent__column}>
                    <span class={style.itemContent__title}>{book.name}</span>

                    <div class={style.itemContent__counter}>
                        <Counter
                            value={book.count}
                            onIncrease={onIncreaseCount}
                            onDecrease={onDecreaseCount}
                        />
                    </div>

                    <button class={style.itemContent__removeBtn}>Удалить из избранного</button>
                </div>

                <div class={`${style.itemContent__column} ${style.orderDetails}`}>
                    <div class={style.orderDetails__row}>
                        <span class={style.deliveryType}>
                            <i class="icon-delivery-van" />
                            Курьером
                        </span>
                        <span class={style.deliveryType}>
                            <i class="icon-delivery-man" />
                            Самовывоз
                        </span>
                    </div>

                    <div class={style.orderDetails__row}>
                        <span class={style.itemContent__price}>{book.price * book.count} Р</span>
                        <div class={style.orderDetails__counter}>
                            <Counter
                                value={book.count}
                                onIncrease={onIncreaseCount}
                                onDecrease={onDecreaseCount}
                            />
                            </div>
                    </div>

                    <div class={style.orderDetails__row}>
                        <span
                            class={`${style.paymentType} _ibg`}
                            style={{backgroundImage: `url(${masterCardImg})`}}
                        />
                        <span
                            class={`${style.paymentType} _ibg`}
                            style={{backgroundImage: `url(${visaImg})`}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
