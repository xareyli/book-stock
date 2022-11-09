import { useCallback, useState } from 'preact/hooks';

import Field from './field';
import style from './style.scss';
import Button from '../ui/button';
import Popup from '../ui/popup';
import { setPopupState } from '../../redux/reducers/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Authentication = () => {
    const [mode, setMode] = useState('signin');
    const isAuthModalOpen = useSelector(state => state.authReducer.isAuthPopupOpen);

    const dispatch = useDispatch();

    const hideModal = useCallback(() => {
        dispatch(setPopupState(false));
    }, []);

    return (
        <Popup isShown={isAuthModalOpen} hide={hideModal}>
            <div class={style.authBlock}>
                <span class={style.authBlock__title}>{mode === 'signin' ? 'Авторизация' : 'Регистрация'}</span>

                <div class={style.authBlock__fields}>
                    <Field icon="icon-profile" placeholder="Логин" />

                    {mode === 'signup' ? <Field icon="icon-mail-small" placeholder="E-mail" /> : ''}

                    <Field icon="icon-lock" placeholder="Пароль" />
                </div>

                <Button className={style.authBlock__btn}>
                    {mode === 'signin' ? 'Авторизироваться' : 'Зарегистрироваться'}
                </Button>

                <span class={style.authBlock__switchMode}>
                    {mode === 'signin' ? (
                        <button onClick={() => setMode('signup')}>Создать аккаунт</button>
                    ) : (
                        <>
                            У вас уже есть аккаунт? <button onClick={() => setMode('signin')}>Войдите</button>
                        </>
                    )}
                </span>
            </div>
        </Popup>
    );
};

export default Authentication;
