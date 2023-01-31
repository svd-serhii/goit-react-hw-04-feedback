import React from 'react';
import PropTypes, { string } from 'prop-types';
import { StatItem } from './Statistics.styled';
import { number } from 'prop-types';

const Statistics = ({ options, values, total, positivePercentage }) => {
  return (
    <ul>
      {options.map((option, indx) => (
        <StatItem key={indx}>
          <p>
            {option}: {values[indx]}
          </p>
        </StatItem>
      ))}

      <StatItem>
        <p>Total: {total}</p>
      </StatItem>
      <StatItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatItem>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  values: PropTypes.arrayOf(number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
