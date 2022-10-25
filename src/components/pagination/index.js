import style from './style.scss';

const Pagination = ({ className, setPage, pagination }) => {
    const pageCount = Math.ceil(pagination.totalCount / pagination.perPage);
    const pages = [];

    let pageCounter = 1;

    if (pageCount > 5) {
        if (pagination.page >= 3) {
            pageCounter = pagination.page - 2;
        } else {
            pageCounter = 1;
        }

        if (pagination.page === pageCount || pagination.page === pageCount - 1) {
            pageCounter = pageCount - 4;
        }
    }

    for (let i = 0; i < 5; i++) {
        pages.push(pageCounter);

        if (pageCounter >= pageCount) {
            break;
        }

        pageCounter++;
    }

    const dots = [];
    const dotsCounterOffset = pagination.page >= 3 ? 2 : 4;

    for (let i = pagination.page + dotsCounterOffset; i < pageCount && dots.length < 5; i++) {
        dots.push(i);
    }

    if (pages.length <= 1) {
        return <></>;
    }

    return (
        <div class={`${style.pagination} ${className}`}>
            {pages.map(page => (
                <span
                    key={page}
                    class={`${style.pagination__item} ${
                        pagination.page === page ? style['pagination__item--active'] : ''
                    }`}
                    onClick={() => setPage(page)}
                >
                    {page}
                </span>
            ))}

            {dots.map(dot => (
                <span key={dot} class={style.pagination__dot} />
            ))}
        </div>
    );
};

export default Pagination;
