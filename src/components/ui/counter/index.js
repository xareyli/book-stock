import { useState } from 'preact/hooks'
import style from './style.scss'


const Counter = () => {
    const [value, setValue] = useState(1);

    return (
        <div class={style.counter}>
            <span class={style.counter__value}>{value}</span>

            <div class={style.counter__controls}>
                <button class={style.counter__decrease} onClick={() => setValue(prev => prev - 1)}>-</button>
                <button class={style.counter__increase} onClick={() => setValue(prev => prev + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
