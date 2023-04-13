import style from './style.scss';

import IBG from '../ibg';
import { Link } from 'preact-router';

const DescribedImage = ({ img, text, textColor = 'black', href, linkText }) => (
    <div class={style.container}>
        <div class={style.block}>
            <p class={`${style.text} ${style[`text--${textColor}`]}`}>{text}</p>

            {linkText ? (
                <Link activeClassName="active" href={href}>
                    <span class={style.link}>
                        {linkText}
                    </span>
                </Link>
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
