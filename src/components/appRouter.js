import { Router } from 'preact-router';

import { useSelector } from 'react-redux';
import { h } from 'preact';

import { authNeededRoutes, publicRoutes } from '../constants/routes';


const AppRouter = () => {
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);

    return (
        <Router>
            {publicRoutes.map(route =>
                h(route.component, {path: route.path})
            )}

            {isAuth && authNeededRoutes.map(route =>
                h(route.component, {path: route.path})
            )}
        </Router>
    )
}

export default AppRouter
