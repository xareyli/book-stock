import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

import AppRouter from './appRouter';

const store = setupStore();

const App = () => {
    return (
        <div id="app">
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
};

export default App;
