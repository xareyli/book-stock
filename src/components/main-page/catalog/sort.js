import style from './style.scss';
import sortTypes from '../../../constants/sortTypes';

const Sort = ({ sort, setSort }) => (
    <div class={style.searchSort__sortWrapper}>
        {Object.keys(sortTypes).map(key => (
            <button
                key={key}
                class={`${style.searchSort__sort} ${key === sort ? style['searchSort__sort--active'] : ''}`}
                onClick={() => setSort(key)}
            >
                {sortTypes[key]}
            </button>
        ))}
    </div>
);

export default Sort;
