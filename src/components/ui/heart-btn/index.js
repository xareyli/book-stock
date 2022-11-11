import useAddBookToCart from "../../../hooks/useAddBookToCart";


const HeartBtn = ({ className, checked, book }) => {
    const onAddToCart = useAddBookToCart(book);

    return (
        <button
            class={`${className} ${checked ? 'icon-heart' : 'icon-heart-empty'}`}
            onClick={onAddToCart}
        />
    )
}

export default HeartBtn
