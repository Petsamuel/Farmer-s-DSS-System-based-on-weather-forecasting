

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <section>
        {children}
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout