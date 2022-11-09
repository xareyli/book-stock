import { useCallback } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setPopupState } from "../redux/reducers/AuthSlice";
import { addElement } from "../redux/reducers/CartSlice";

const useAddBookToCart = book => {
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    const addToCartCallback = useCallback(() => {
        if (!isAuth) {
            dispatch(setPopupState(true));
        } else {
            dispatch(addElement(book));
        }
    }, [isAuth, book]);

    return addToCartCallback;
};

export default useAddBookToCart;
