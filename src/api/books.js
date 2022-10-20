import axios from 'axios';

export const getBooks = ({ search = false, genres = [], sortType = false, price = false, onSale = false } = {}) =>
    new Promise(resolve => {
        // Delay for testing purposes
        setTimeout(async () => {
            let paramsQuery = '?';

            paramsQuery += genres.length ? `genres=${genres.join()}&` : '';
            paramsQuery += search ? `search=${search}&` : '';
            paramsQuery += onSale ? `onSale=true&` : '';
            paramsQuery += sortType ? `sortType=${sortType}&` : '';
            paramsQuery += price ? `fromPrice=${price[0]}&toPrice=${price[1]}&` : '';

            paramsQuery = paramsQuery.slice(0, -1);

            const promise = await axios.get(`/api/books${paramsQuery}`);

            resolve(promise.data);
        }, 0);
    });
