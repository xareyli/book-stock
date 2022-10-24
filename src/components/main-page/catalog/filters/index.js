import { useCallback } from 'preact/hooks';
import { Form } from 'react-final-form';

import GenresForm from './genres-form';
import OptionWrapper from './option-wrapper';
import PriceForm from './price-form';
import style from './style.scss';

const Filters = ({ className, reducer }) => {
    const [catalogState, catalogDispatch] = reducer;

    const setFilters = useCallback(
        formObj => {
            if (catalogState.filters?.genres?.join() !== formObj?.genres?.join()) {
                delete formObj.fromPrice;
                delete formObj.toPrice;
                catalogDispatch({ type: 'setPriceRange', payload: [0, 1] });
            }

            catalogDispatch({ type: 'setFilters', payload: formObj });
        },
        [catalogState],
    );

    function gonnaOpenModal() {
        const beforeOpenModalEvent = new Event('beforeOpenModal');

        window.dispatchEvent(beforeOpenModalEvent);
    }

    return (
        <Form
            onSubmit={setFilters}
            subscription={{ submitting: true }}
            render={({ handleSubmit, form }) => (
                <form class={`${className} ${style.filters}`} onChange={handleSubmit} onSubmit={handleSubmit}>
                    <OptionWrapper title="Цена" gonnaOpenModal={gonnaOpenModal}>
                        <PriceForm
                            minPrice={catalogState.priceRange[0]}
                            maxPrice={catalogState.priceRange[1]}
                            form={form}
                        />
                    </OptionWrapper>

                    <OptionWrapper title="Жанр" gonnaOpenModal={gonnaOpenModal}>
                        <GenresForm />
                    </OptionWrapper>
                </form>
            )}
        />
    );
};

export default Filters;
