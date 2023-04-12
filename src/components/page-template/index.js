import Header from '../header';
import Authentication from '../authentication';
import Preloader from './preloader';

const PageTemplate = ({ children }) => {
    return (
        <>
            <Preloader />
            <Header />
            <Authentication />

            {children}
        </>
    )
}

export default PageTemplate;
