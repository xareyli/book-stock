import style from './style.scss'


const Counter = ({ value, onIncrease, onDecrease}) => {
    return (
        <div class={style.counter}>
            <span class={style.counter__value}>{value}</span>

            <div class={style.counter__controls}>
                <button class={style.counter__decrease} onClick={onDecrease}>-</button>
                <button class={style.counter__increase} onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}

export default Counter
