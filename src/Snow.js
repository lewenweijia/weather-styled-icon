import React from 'react';
import PropTypes from 'prop-types';
import { Sun } from './Sunny';
import { Cloud, Snowing, Icon, WeatherThemeProvider } from './components';

const Snow = ({ patchy, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <Cloud />
      {patchy && <Sun onTheSide />}
      <Snowing />
    </Icon>
  </WeatherThemeProvider>
);

Snow.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
};

Snow.defaultProps = {
  patchy: false,
  size: 1,
};

export default Snow;