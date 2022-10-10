import { useDispatch, useSelector } from 'react-redux';
import style from './style.css';

import { authSlice } from '../../redux/reducers/AuthSlice';

const Home = () => {
    const state = useSelector(state => state.authReducer);
    const { increment } = authSlice.actions;
    const dispatch = useDispatch();

    return (
        <div class={style.home}>
            <h1>{state.isAuthenticated}</h1>
            <p onClick={() => dispatch(increment(1))}>This is the Home component.</p>
        </div>
    );
};

export default Home;
