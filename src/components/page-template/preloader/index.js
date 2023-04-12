import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

const Prealoder = () => {
    const [preloaderClass, setPrealoderClass] = useState(style.preloader);

    useEffect(() => {
        setTimeout( () => {
            console.log(style.preloader + ' ' + style.preloader__done);
            setPrealoderClass(style.preloader + ' ' + style.preloader__done);
        }, 450);
    }, []);

    return (
        <div className={preloaderClass} />
    )
}

export default Prealoder;
