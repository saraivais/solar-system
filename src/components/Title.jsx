import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Title = class extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="section-title">{ headline }</h2>
    );
  }
};

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
