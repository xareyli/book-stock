import style from './style.scss';

import CartItem from '../../components/cart-page/cart-item';


const Cart = () => {
    return (
        <div class={style.cartPage}>
            <div class="_container">
                <div class={style.cartPage__list}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </div>
    )
}

export default Cart;
