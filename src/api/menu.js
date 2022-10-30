import axios from 'axios';


export const getCoffies = async ({ count = null } = {}) => {
    const promise = await axios.get(`/api/coffies${count ? '?count=' + count : '' }`);

    return promise.data;
};

export const getDesserts = async ({ count = null } = {}) => {
    const promise = await axios.get(`/api/desserts${count ? '?count=' + count : '' }`);

    return promise.data;
}
