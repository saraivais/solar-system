import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md

const MissionCard = class extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <p data-testid="mission-year" className="mission-year">{year}</p>
        <p data-testid="mission-country" className="mission-country">{country}</p>
        <p data-testid="mission-destination" className="mission-dest">{destination}</p>
      </div>
    );
  }
};

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
