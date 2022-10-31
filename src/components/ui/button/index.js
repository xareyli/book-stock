import style from './style.scss';

const Button = ({ className, children }) => <button class={`${style.button} ${className}`}>{children}</button>;

export default Button;
