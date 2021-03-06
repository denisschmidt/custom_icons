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

const RatePlan = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="RatePlan" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 11.38V4H5V28H19C23.1117 27.7724 26.4672 24.6269 26.9598 20.5385C27.4524 16.4501 24.94 12.5977 21 11.4V11.38ZM16 14H19C20.6375 13.9998 21.9727 15.3127 22 16.95V17.1C22.0161 17.8618 21.7254 18.5982 21.1932 19.1435C20.661 19.6889 19.932 19.9975 19.17 20H18V21H20V23H18V24H16V23H15V21H16V20H15V18H16V14ZM18 18H19.12H19.15C19.87 18 20 17.31 20 17C20 16.4477 19.5523 16 19 16H18V18ZM7 6V26H13C10.2547 23.7019 9.24601 19.9285 10.4785 16.5671C11.7111 13.2057 14.9198 10.9787 18.5 11H19V6H7ZM18.5 26C14.9101 26 12 23.0899 12 19.5C12 15.9101 14.9101 13 18.5 13C22.0899 13 25 15.9101 25 19.5C24.9945 23.0876 22.0876 25.9945 18.5 26ZM15 7H11V9H15V7Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

RatePlan.propTypes = propTypes;
RatePlan.defaultProps = defaultProps;

export default RatePlan;
