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

                let booksPriceRange = null;

                if (answear.length) {
                    const fillerPrice = answear[0].salePrice ? answear[0].salePrice : answear[0].price;

                    booksPriceRange = [fillerPrice, fillerPrice];

                    for (let book of answear) {
                        const bookPrice = book.salePrice ? book.salePrice : book.price;

                        if (bookPrice < booksPriceRange[0]) {
                            booksPriceRange[0] = bookPrice;
                        } else if (bookPrice > booksPriceRange[1]) {
                            booksPriceRange[1] = bookPrice;
                        }
                    }
                }

                if (req.queryParams.search) {
                    const searchQuery = req.queryParams.search;

                    answear = answear.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
                }

                if (req.queryParams.fromPrice) {
                    const fromPrice = req.queryParams.fromPrice;

                    answear = answear.filter(item => {
                        const itemPrice = item.salePrice ? item.salePrice : item.price;

                        return itemPrice >= fromPrice;
                    });
                }

                if (req.queryParams.toPrice) {
                    const toPrice = req.queryParams.toPrice;

                    answear = answear.filter(item => {
                        const itemPrice = item.salePrice ? item.salePrice : item.price;

                        return itemPrice <= toPrice;
                    });
                }

                let answearPaginated = [];

                if (req.queryParams.page && req.queryParams.perPage) {
                    const page = +req.queryParams.page;
                    const perPage = +req.queryParams.perPage;
                    const offset = page * perPage - perPage;

                    answearPaginated = answear.slice(offset, offset + perPage);
                }

                return {
                    booksPriceRange,
                    totalCount: answear.length,
                    books: answearPaginated.length ? answearPaginated : answear.slice(0, 6),
                };
            });
        },
    });
}
