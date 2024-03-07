import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="page-content">
                <div id="content">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default MainLayout
MainLayout.propTypes = {
    children: PropTypes.node,
  };
  