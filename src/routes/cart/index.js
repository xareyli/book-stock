import style from './style.scss';

import CartItem from '../../components/cart-page/cart-item';
import { useSelector } from 'react-redux';


const Cart = () => {
    const cart = useSelector(state => state.cartReducer);

    return (
        <div class={style.cartPage}>
            <div class="_container">
                <div class={style.cartPage__list}>
                    {cart.cartElements.map(cartItem =>
                        <CartItem key={cartItem.id} book={cartItem} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart;
