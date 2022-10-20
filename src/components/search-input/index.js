import { useCallback } from 'preact/hooks';
import style from './style.scss';

const SearchInput = ({ className, value, onChange }) => {
    const onInputChange = useCallback(e => onChange(e.target.value), []);

    return (
        <div class={`${style.search} ${className}`}>
            <input class={style.search__input} value={value} onChange={onInputChange} placeholder="Поиск" type="text" />

            <i class="icon-search" />
        </div>
    );
};

export default SearchInput;
