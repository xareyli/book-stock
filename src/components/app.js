import { Provider } from 'react-redux';
import Header from './header';

import { setupStore } from '../redux/store';

import Authentication from './authentication';
import AppRouter from './appRouter';

const store = setupStore();

const App = () => {
    return (
        <div id="app">
            <Provider store={store}>
                <Header />
                <Authentication />

                <AppRouter />
            </Provider>
        </div>
    )
};

export default App;
