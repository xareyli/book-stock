import sortTypes from '../../../constants/sortTypes';

const catalogInitialState = {
    search: '',
    sortType: Object.keys(sortTypes)[0],
    filters: {},
    priceRange: [10, 100],
};

const catalogReducer = (state, action) => {
    switch (action.type) {
        case 'setSearch':
            return { ...state, search: action.payload };

        case 'setSort':
            return { ...state, sortType: action.payload };

        case 'setFilters':
            return { ...state, filters: action.payload };

        case 'setPriceRange':
            return { ...state, priceRange: action.payload };

        default:
            return state;
    }
};

export { catalogReducer, catalogInitialState };
