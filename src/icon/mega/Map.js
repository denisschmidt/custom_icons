import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { ThemeContext } from '../../styles/theme-provider';
import { ICON_SIZES } from '../../constants';

const propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  kind: PropTypes.string,
};

const defaultProps = {
  size: 'medium',
};

const Map = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Map" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4L20.91 6.93L26.84 4L28 4.72V24.62L21 28L11.09 25.07L5.16 28L4 27.27V7.38L11 4ZM6 25.39L10 23.39V6.62L6 8.62V25.39ZM20 25.69L12 23.26V6.32L20 8.75V25.69ZM22 25.39L26 23.39V6.62L22 8.62V25.39Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;
