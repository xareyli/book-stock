const IBG = ({ className, img }) => (
    <div
        className={`${className} _ibg`}
        style={{
            backgroundImage: `url(${img})`,
        }}
    />
);

export default IBG;
