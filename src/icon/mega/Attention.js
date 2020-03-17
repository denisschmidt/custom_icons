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

const Attention = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Attention" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M14.8 19.6H17.2V22H14.8V19.6ZM14.8 10H17.2V17.2H14.8V10ZM16 4C9.364 4 4 9.4 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C19.1826 28 22.2348 26.7357 24.4853 24.4853C26.7357 22.2348 28 19.1826 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4V4ZM16 25.6C13.4539 25.6 11.0121 24.5886 9.21178 22.7882C7.41143 20.9879 6.4 18.5461 6.4 16C6.4 13.4539 7.41143 11.0121 9.21178 9.21178C11.0121 7.41143 13.4539 6.4 16 6.4C18.5461 6.4 20.9879 7.41143 22.7882 9.21178C24.5886 11.0121 25.6 13.4539 25.6 16C25.6 18.5461 24.5886 20.9879 22.7882 22.7882C20.9879 24.5886 18.5461 25.6 16 25.6V25.6Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Attention.propTypes = propTypes;
Attention.defaultProps = defaultProps;

export default Attention;
