import { useCallback, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setPopupState } from "../redux/reducers/AuthSlice";
import { addElement } from "../redux/reducers/CartSlice";

const useAddBookToCart = book => {
    const authReducer = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const [hasTryedAdd, setHasTryedAdd] = useState(false);

    const addToCartCallback = useCallback(() => {
        if (!authReducer.isAuthenticated) {
            dispatch(setPopupState(true));
            setHasTryedAdd(true);
        } else {
            dispatch(addElement(book));
        }
    }, [authReducer.isAuthenticated, book]);

    useEffect(() => {
        if (hasTryedAdd) {
            dispatch(addElement(book));
            setHasTryedAdd(false);
        }
    }, [authReducer.isAuthenticated]);

    useEffect(() => {
        if (!authReducer.isAuthPopupOpen) {
            setHasTryedAdd(false);
        }
    }, [authReducer.isAuthPopupOpen]);

    return addToCartCallback;
};

export default useAddBookToCart;
