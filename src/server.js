import { createServer } from 'miragejs';

import mockData from './mockData.json';

export default function startMockServer() {
    createServer({
        routes() {
            this.namespace = 'api';

            this.get('/books', (res, req) => {
                let answear = mockData.books;

                if (req.queryParams.onSale) {
                    answear = answear.filter(item => console.log(item) || !!item.salePrice);
                }

                return answear.slice(0, 6);
            });

            this.get('/books/search/:query', (res, req) => {
                const searchQuery = req.params.query;

                return mockData.books.filter(item => item.name.indexOf(searchQuery) !== -1);
            });
        },
    });
}
