import Book from "../routes/book";
import Cafeteria from "../routes/cafeteria";
import Cart from "../routes/cart";
import Checkout from "../routes/checkout";
import Home from "../routes/home";


export const publicRoutes = [
    {
        component: Home,
        path: '/'
    },
    {
        component: Book,
        path: '/book/:id'
    },
    {
        component: Cafeteria,
        path: '/cafeteria'
    },
];

export const authNeededRoutes = [
    {
        component: Cart,
        path: '/cart'
    },
    {
        component: Checkout,
        path: '/checkout'
    },
];
