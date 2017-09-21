import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
       <h1> Hello React!! </h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
