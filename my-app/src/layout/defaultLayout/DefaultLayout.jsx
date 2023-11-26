import Header from '../header';
import Footer from '../footer';
import "../../styles/global.scss"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
