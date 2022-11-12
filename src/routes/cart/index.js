import style from './style.scss';

import CartItem from '../../components/cart-page/cart-item';
import { useSelector } from 'react-redux';

import Button from '../../components/ui/button';
import { Link } from 'preact-router';


const Cart = () => {
    const cartElements = useSelector(state => state.cartReducer.cartElements);

    if (cartElements.length < 1) {
        return (
            <div class={`_technical-page ${style.cartPage}`}>
                <div class="_container">
                    Корзина пуста
                </div>
            </div>
        )
    }

    return (
        <div class={`_technical-page ${style.cartPage}`}>
            <div class="_container">
                <div class={style.cartPage__list}>
                    {cartElements.map(cartItem =>
                        <CartItem key={cartItem.id} book={cartItem} />
                    )}

                    <Link href="/checkout">
                        <Button className={style.cartPage__checkoutBtn}>
                            К оплате
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;
