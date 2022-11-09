import { useCallback, useState } from 'preact/hooks';

import Field from './field';
import style from './style.scss';
import Button from '../ui/button';
import Popup from '../ui/popup';
import { setPopupState, authenticate } from '../../redux/reducers/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Authentication = () => {
    const [mode, setMode] = useState('signin');
    const isAuthModalOpen = useSelector(state => state.authReducer.isAuthPopupOpen);

    const dispatch = useDispatch();

    const hideModal = useCallback(() => {
        dispatch(setPopupState(false));
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        dispatch(authenticate());
    }, []);

    return (
        <Popup isShown={isAuthModalOpen} hide={hideModal}>
            <form class={style.authBlock} onSubmit={onSubmit}>
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
                        <button type="button" onClick={() => setMode('signup')}>Создать аккаунт</button>
                    ) : (
                        <>
                            У вас уже есть аккаунт? <button type="button" onClick={() => setMode('signin')}>Войдите</button>
                        </>
                    )}
                </span>
            </form>
        </Popup>
    );
};

export default Authentication;
