import style from './style.scss'

const LoadingIndication = ({ className }) => {
    return (
        <div className={`${style.loader} ${className}`}></div>
    );
};

export default LoadingIndication;
