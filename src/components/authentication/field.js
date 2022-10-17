import style from './style.scss';

const Field = ({ icon, placeholder }) => (
    <div class={style.field}>
        <i class={`${icon} ${style.field__icon}`} />

        <input type="text" class={style.field__input} placeholder={placeholder} />
    </div>
);

export default Field;
