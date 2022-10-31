import style from './style.scss';

import BlockTitle from '../../ui/block-title/';

const SectionTemplate = ({ className = '', title, children }) => (
    <section class={`${style.homeSection} ${className}`}>
        <div class="_container">
            <BlockTitle>{title}</BlockTitle>

            {children}
        </div>
    </section>
);

export default SectionTemplate;
