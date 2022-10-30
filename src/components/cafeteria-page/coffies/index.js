import style from './style.scss';

import coffeeCupImg from '../../../assets/image/cafeteria-page/coffee-cup.png';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { getCoffies } from '../../../api/menu';
import coffeeSizes from '../../../constants/coffeeSizes';


const Coffies = ({ className = '' }) => {
    const [coffies, setCoffies] = useState([]);
    const [moreAvailable, setMoreAvailable] = useState(true);

    useEffect(() => {
        const fetchCoffies = async () => {
            setCoffies(await getCoffies({count: 3}));
        }

        fetchCoffies();
    }, []);

    const fetchMoreCoffies = useCallback(async () => {
        setCoffies(await getCoffies());
        setMoreAvailable(false);
    }, []);

    return (
        <div class={className}>
            <div class={style.table}>
                <div class={style.table__head}>
                    <span class={`${style.table__cell} ${style['table__cell--wide']} ${style.table__title}`}>Кофе</span>

                    {coffeeSizes.map(coffeeSize => <div key={coffeeSize.name} class={style.table__cell}>
                        <div class={style.table__headerCellWrapper}>
                            <div class={`${style.table__coffeeCup} ${style[`table__coffeeCup--${coffeeSize.name}`]} _ibg`} style={{ backgroundImage: `url(${coffeeCupImg})`}} />
                            {coffeeSize.volume} мл
                        </div>
                    </div>)}
                </div>

                {coffies.map(coffee => <div key={coffee.name} class={style.table__row}>
                    <span class={`${style.table__cell} ${style['table__cell--wide']}`}>{coffee.name}</span>
                    <span class={style.table__cell}>{coffee.smallCost} Р</span>
                    <span class={style.table__cell}>{coffee.mediumCost} Р</span>
                    <span class={style.table__cell}>{coffee.largeCost} Р</span>
                </div>)}
            </div>

            {moreAvailable ?
                <button
                    class="moreFoodBtn"
                    onClick={fetchMoreCoffies}
                >
                    Другие напитки <i class="icon-outlined-triangle" />
                </button>
                :
                ''
            }
        </div>
    )
}

export default Coffies
