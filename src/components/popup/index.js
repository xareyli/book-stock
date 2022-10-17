import { useCallback, useEffect } from 'preact/hooks';
import style from './style.scss';

const Popup = ({ children, isShown, hide }) => {
    const onHidePopup = useCallback(() => {
        hide();
    }, []);

    useEffect(() => {
        if (isShown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isShown]);

    return (
        <div class={`${style.popup} ${isShown ? style['popup--shown'] : ''}`} onClick={onHidePopup}>
            <div class={style.popup__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
