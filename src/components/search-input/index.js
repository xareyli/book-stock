import style from './style.scss';

const SearchInput = ({ className }) => (
    <div class={`${style.search} ${className}`}>
        <input class={style.search__input} placeholder="Поиск" type="text" />

        <i class="icon-search" />
    </div>
);

export default SearchInput;
