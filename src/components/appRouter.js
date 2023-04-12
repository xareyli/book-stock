import { Router } from 'preact-router';

import { useSelector } from 'react-redux';
import { h } from 'preact';

import { authNeededRoutes, publicRoutes } from '../constants/routes';
import NotFound from "../routes/404";
import PageTemplate from './page-template';


const AppRouter = () => {
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);

    return (
        <PageTemplate>
            <Router>
                {publicRoutes.map(route =>
                    h(route.component, {path: route.path})
                )}

                {isAuth && authNeededRoutes.map(route =>
                    h(route.component, {path: route.path})
                )}

                <NotFound default />
            </Router>
        </PageTemplate>
    )
}

export default AppRouter;
