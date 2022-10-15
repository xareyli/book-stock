import style from './style.scss';

const Button = ({ className, children }) => <button class={`${className} ${style.button}`}>{children}</button>;

export default Button;
