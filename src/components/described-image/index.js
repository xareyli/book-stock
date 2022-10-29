import style from './style.scss';

import IBG from '../ibg';

const DescribedImage = ({ img, text, textColor = 'black', linkText }) => (
    <div class={style.container}>
        <div class={style.block}>
            <p class={`${style.text} ${style[`text--${textColor}`]}`}>{text}</p>

            {linkText ? (
                <a href="#" class={style.link}>
                    {linkText}
                </a>
            ) : (
                ''
            )}
        </div>

        <div class={style.block}>
            <IBG className={style.image} img={img} />
        </div>
    </div>
);

export default DescribedImage;
