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

const Hide = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Hide" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 11.1936C12.8448 8.26828 19.1552 8.26932 24 11.1936L22.9874 13C20.8788 11.7268 18.4296 11.0034 16 11C13.5571 10.9966 11.1338 11.7203 9.01265 13L8 11.1936ZM26.488 15L28 16.259C27.4067 16.8966 26.7499 17.4637 26.0649 17.9917L27.8308 20.2906L26.1999 21.4114L24.428 19.104C23.5959 19.5948 22.7205 20.0056 21.8109 20.343L22.7497 23.0755L20.8327 23.6645L19.8939 20.9292C18.952 21.155 17.988 21.2961 17.0068 21.3552V24H14.9922V21.3552C13.9858 21.2942 12.9966 21.1455 12.0306 20.9091L11.1673 23.4262L9.25028 22.8372L10.1166 20.3163C9.23316 19.9837 8.38094 19.5815 7.57205 19.104L5.79912 21.4114L4.16923 20.2906L5.93511 17.9917C5.25012 17.4637 4.59333 16.8966 4 16.259L5.51203 15C8.17343 17.8602 11.9963 19.5005 15.9995 19.5005C20.0037 19.5005 23.8256 17.8602 26.488 15Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Hide.propTypes = propTypes;
Hide.defaultProps = defaultProps;

export default Hide;
