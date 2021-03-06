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

const TimeBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="TimeBlock" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons /  Time block">
            <path
              id="error"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.00488 12C4.00488 7.58277 7.58265 4.005 11.9999 4.005C16.4171 4.005 19.9949 7.58277 19.9949 12C19.9949 16.4172 16.4171 19.995 11.9999 19.995C7.58265 19.995 4.00488 16.4172 4.00488 12ZM12.9999 9.00001V12.59L14.7099 14.29C14.8899 14.47 14.9999 14.72 14.9999 15C14.9999 15.55 14.5499 16 13.9999 16C13.7199 16 13.4699 15.89 13.2899 15.71L11.2899 13.71C11.1099 13.53 10.9999 13.28 10.9999 13V9.00001C10.9999 8.45001 11.4499 8.00001 11.9999 8.00001C12.5499 8.00001 12.9999 8.45001 12.9999 9.00001Z"
              fill="#D34C4C"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

TimeBlock.propTypes = propTypes;
TimeBlock.defaultProps = defaultProps;

export default TimeBlock;
