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

const Show = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Show" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.24 12.35L24.42 14.5C23.6002 13.9738 22.7331 13.5252 21.83 13.16L22.93 10.36L21.07 9.63L19.93 12.53C18.9702 12.2835 17.9891 12.1295 17 12.07V9H15V12.07C14.0106 12.1328 13.0294 12.2902 12.07 12.54L10.93 9.64L9.07 10.37L10.17 13.17C9.26726 13.532 8.40019 13.9772 7.58 14.5L5.76 12.35L4.24 13.65L5.97 15.65C5.27193 16.221 4.61372 16.8391 4 17.5L5.46 19C8.05452 15.8483 11.9178 14.0156 16 14C20.0807 13.9976 23.9451 15.8343 26.52 19L28 17.5C27.3753 16.8519 26.7071 16.2471 26 15.69L27.73 13.69L26.24 12.35ZM20 20C20 17.7909 18.2091 16 16 16C13.7909 16 12 17.7909 12 20C12 22.2091 13.7909 24 16 24C18.2091 24 20 22.2091 20 20ZM16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Show.propTypes = propTypes;
Show.defaultProps = defaultProps;

export default Show;
