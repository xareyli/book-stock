import style from './style.scss';
import sortTypes from '../../../constants/sortTypes';

const Sort = ({ sortType, changeSortType }) => (
    <div class={style.searchSort__sortWrapper}>
        {Object.keys(sortTypes).map(key => (
            <button
                key={key}
                class={`${style.searchSort__sort} ${key === sortType ? style['searchSort__sort--active'] : ''}`}
                onClick={() => changeSortType(key)}
            >
                {sortTypes[key]}
            </button>
        ))}
    </div>
);

export default Sort;
