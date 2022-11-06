import style from './style.scss';


const PaymentForm = ({ className }) => {
    return (
        <form class={`${className} ${style.paymentForm}`}>
            <div class={`${style.paymentForm__field} ${style.paymentField} ${style['paymentForm__field--card']}`}>
                <span class={style.paymentField__label}>Номер карты :</span>
                <input class={style.paymentField__input} placeholder=" " type="text" />
            </div>

            <div class={`${style.paymentForm__field} ${style.paymentField} ${style['paymentForm__field--cardDate']}`}>
                <span class={style.paymentField__label}>Месяц / год</span>
                <input class={style.paymentField__input} placeholder=" " type="text" />
            </div>

            <div class={`${style.paymentForm__field} ${style.paymentField} ${style['paymentForm__field--cvc']}`}>
                <span class={style.paymentField__label}>CVC / CVV</span>
                <input class={style.paymentField__input} placeholder=" " type="text" />
            </div>

            <div class={`${style.paymentForm__field} ${style.paymentField} ${style['paymentForm__field--email']}`}>
                <span class={style.paymentField__label}>E-mail</span>
                <input class={style.paymentField__input} placeholder=" " type="text" />
            </div>

            <button className={style.paymentForm__submitBtn}>ОПЛАТИТЬ 2800 Р</button>
        </form>
    )
}

export default PaymentForm
