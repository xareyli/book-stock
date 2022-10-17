import axios from 'axios';

export const getBooks = async () => {
    const promise = await axios.get('/api/books');

    return promise.data;
};

export const getBooksInStock = async () => {
    const promise = await axios.get('/api/books?onSale=true');

    return promise.data;
};
