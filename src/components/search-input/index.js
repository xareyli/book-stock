import { useCallback } from 'preact/hooks';
import style from './style.scss';

const SearchInput = ({ className, search, setSearch }) => {
    const onInputChange = useCallback(e => setSearch(e.target.value), []);

    return (
        <div class={`${style.search} ${className}`}>
            <input
                class={style.search__input}
                value={search}
                onChange={onInputChange}
                placeholder="Поиск"
                type="text"
            />

            <i class="icon-search" />
        </div>
    );
};

export default SearchInput;
