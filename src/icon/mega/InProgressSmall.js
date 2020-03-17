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

const InProgressSmall = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="InProgressSmall" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            d="M16 6C17.3132 6 18.6136 6.25866 19.8268 6.7612C21.0401 7.26375 22.1425 8.00035 23.0711 8.92893C23.9997 9.85752 24.7362 10.9599 25.2388 12.1732C25.7413 13.3864 26 14.6868 26 16C26 18.6522 24.9464 21.1957 23.0711 23.0711C21.1957 24.9464 18.6522 26 16 26C14.6868 26 13.3864 25.7413 12.1732 25.2388C10.9599 24.7362 9.85752 23.9997 8.92893 23.0711C7.05357 21.1957 6 18.6522 6 16C6 13.3478 7.05357 10.8043 8.92893 8.92893C10.8043 7.05357 13.3478 6 16 6V6ZM16 8C13.8783 8 11.8434 8.84285 10.3431 10.3431C8.84285 11.8434 8 13.8783 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84285 18.1217 8 16 8V8ZM20.9 11.1L16 16V9C17.9 9 19.7 9.8 20.9 11.1Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

InProgressSmall.propTypes = propTypes;
InProgressSmall.defaultProps = defaultProps;

export default InProgressSmall;
