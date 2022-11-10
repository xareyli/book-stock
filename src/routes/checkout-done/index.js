import style from './style.scss'

import checkmarkImg from '../../assets/image/checkout-done/checkmark.png'


const CheckoutDone = () => {
    return (
        <div class={`_technical-page ${style.checkoutDonePage}`}>
            <div class="_container">
                <div class={style.checkoutDonePage__content}>
                    <div
                        class={`_ibg ${style.checkoutDonePage__checkmark}`}
                        style={{backgroundImage: `url(${checkmarkImg})`}}
                    />

                    <div class={style.checkoutDonePage__textBlock}>
                        <span class={style.checkoutDonePage__bigText}>Успешная оплата</span>
                        <span class={style.checkoutDonePage__smallText}>Оплата выбранной услуги прошла успешно</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutDone;
