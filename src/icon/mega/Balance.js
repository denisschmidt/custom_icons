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

const Balance = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Balance" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16ZM6 16C6 21.5228 10.4772 26 16 26C18.6522 26 21.1957 24.9464 23.0711 23.0711C24.9464 21.1957 26 18.6522 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16ZM17 9H13V15H11V17H13V19H11V21H13V23H15V21H19V19H15V17H17C19.2091 17 21 15.2091 21 13C21 10.7909 19.2091 9 17 9ZM15 11V15H17C18.1046 15 19 14.1046 19 13C19 11.8954 18.1046 11 17 11H15Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Balance.propTypes = propTypes;
Balance.defaultProps = defaultProps;

export default Balance;
