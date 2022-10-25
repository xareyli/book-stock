import sortTypes from '../../../constants/sortTypes';

const catalogInitialState = {
    search: '',
    sortType: Object.keys(sortTypes)[0],
    filters: {},
    priceRange: [10, 100],
    page: 1,
    booksCount: null,
};

const catalogReducer = (state, action) => {
    switch (action.type) {
        case 'setSearch':
            return { ...state, search: action.payload, page: 1, booksCount: null };

        case 'setSort':
            return { ...state, sortType: action.payload, page: 1 };

        case 'setFilters':
            return { ...state, filters: action.payload, page: 1, booksCount: null };

        case 'setPriceRange':
            return { ...state, priceRange: action.payload };

        case 'setPage':
            return { ...state, page: action.payload };

        case 'setBooksCount':
            return { ...state, booksCount: action.payload };

        default:
            return state;
    }
};

export { catalogReducer, catalogInitialState };
