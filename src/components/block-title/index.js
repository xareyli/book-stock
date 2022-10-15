import style from './style.scss';

const BlockTitle = ({ children, color }) => (
    <h2 class={`${style.blockTitle} ${style[`blockTitle--${color || 'black'}`]}`}>{children}</h2>
);

export default BlockTitle;
