import { createServer } from 'miragejs';

import mockData from './mockData.json';

export default function startMockServer() {
    createServer({
        routes() {
            this.namespace = 'api';

            const filterGenres = (items, genresArray) =>
                items.filter(item => {
                    for (const requestedGenre of genresArray) {
                        if (item.genres.includes(requestedGenre)) {
                            return true;
                        }
                    }

                    return false;
                });

            this.get('/books', (res, req) => {
                let answear = JSON.parse(JSON.stringify(mockData.books));

                if (req.queryParams.onSale) {
                    answear = answear.filter(item => !!item.salePrice);
                }

                if (req.queryParams.genres) {
                    const genresArray = req.queryParams.genres.split(',');

                    answear = filterGenres(answear, genresArray);
                }

                if (req.queryParams.search) {
                    const searchQuery = req.queryParams.search;

                    answear = answear.filter(item => item.name.toLowerCase().includes(searchQuery));
                }

                if (req.queryParams.sortType) {
                    const sortType = req.queryParams.sortType;

                    if (sortType === 'popular') {
                        answear = answear.sort((a, b) => b.rating - a.rating);
                    } else if (sortType === 'price') {
                        answear = answear.sort((a, b) => {
                            let priceA = a.salePrice ? a.salePrice : a.price;
                            let priceB = b.salePrice ? b.salePrice : b.price;

                            return priceB - priceA;
                        });
                    }
                }

                return answear.slice(0, 6);
            });
        },
    });
}
