import RQProviders from '../services/provider';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <RQProviders>
        <section>
            {children}
        </section>
    </RQProviders>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout