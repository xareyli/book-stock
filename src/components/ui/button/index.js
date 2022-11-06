import style from './style.scss';

const Button = ({ className, onClick = () => false, children }) => <button class={`${style.button} ${className}`} onClick={onClick}>{children}</button>;

export default Button;
