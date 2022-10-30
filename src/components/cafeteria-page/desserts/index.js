import style from './style.scss'

import { useCallback, useEffect, useState } from 'preact/hooks';
import { getDesserts } from '../../../api/menu';


const Desserts = ({ className }) => {
    const [desserts, setDesserts] = useState([]);
    const [moreAvailable, setMoreAvailable] = useState(true);

    useEffect(() => {
        const fetchDesserts = async () => {
            setDesserts(await getDesserts({count: 3}));
        }

        fetchDesserts();
    }, []);

    const fetchMoreDesserts = useCallback(async () => {
        setDesserts(await getDesserts());
        setMoreAvailable(false);
    }, []);

    return (
        <div class={className}>
            <span class={style.title}>Десерты</span>

            <div class={style.table}>
                {desserts.map(dessert =>
                    <div key={dessert.name} class={style.table__row}>
                        <span class={`${style.table__cell} ${style['table__cell--wide']}`}>{dessert.name} <em>{dessert.weight} г</em></span>
                        <span class={style.table__cell}>{dessert.price} Р</span>
                    </div>
                )}
            </div>

            {moreAvailable ?
                <button
                    class="moreFoodBtn"
                    onClick={fetchMoreDesserts}
                >
                    Другие десерты <i class="icon-outlined-triangle" />
                </button>
                :
                ''
            }
        </div>
    )
}

export default Desserts
