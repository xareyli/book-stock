import style from './style.scss'
import visaImg from '../../assets/image/checkout-page/visa-big.png';
import PaymentForm from '../../components/checkout-page/payment-form';
import { useSelector } from 'react-redux';


const Checkout = () => {
    const cartElements = useSelector(state => state.cartReducer.cartElements);

    return (
        <div class={`_technical-page ${style.checkoutPage}`}>
            <div class="_container">
                <div class={style.checkoutPage__content}>
                    <div class={style.checkoutPage__mainInfo}>
                        <h1 class={style.checkoutPage__title}>Оплата заказа #3050</h1>
                        <h3 class={style.checkoutPage__subtitle}>Содержание заказа :</h3>

                        <div class={style.checkoutPage__orderContent}>
                            {cartElements.map(item =>
                                <div class={style.orderItem}>
                                    <span class={style.orderItem__bookName}>{item.name}</span>

                                    <span class={style.orderItem__price}>ИТОГО: {item.price * item.count} Р</span>

                                    <span class={style.orderItem__count}>Кол-во&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.count}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class={`${style.checkoutPage__paymentMethod} ${style.paymentMethod}`}>
                        <span class={style.paymentMethod__title}>Способ оплаты :</span>

                        <div class={style.paymentMethod__image}>
                            <img src={visaImg} />
                        </div>
                    </div>

                    <PaymentForm className={style.checkoutPage__paymentForm} />
                </div>
            </div>
        </div>
    )
}

export default Checkout
