import axios from 'axios';

export const getBooks = ({ search = false, sortType = false, filters = {}, pagination = {}, onSale = false } = {}) =>
    new Promise(resolve => {
        // Delay for testing purposes
        setTimeout(async () => {
            let paramsQuery = '?';

            paramsQuery += search ? `search=${search}&` : '';
            paramsQuery += sortType ? `sortType=${sortType}&` : '';
            paramsQuery += onSale ? `onSale=true&` : '';
            paramsQuery += pagination ? `page=${pagination.page}&perPage=${pagination.perPage}&` : '';

            for (const filterKey in filters) {
                const filterValue = filters[filterKey];

                if (filterValue !== Object(filterValue)) {
                    paramsQuery += `${filterKey}=${filterValue}&`;
                } else if (Array.isArray(filterValue)) {
                    paramsQuery += `${filterKey}=${filterValue.join()}&`;
                }
            }

            paramsQuery = paramsQuery.slice(0, -1);

            const promise = await axios.get(`/api/books${paramsQuery}`);

            resolve(promise.data);
        }, 0);
    });
