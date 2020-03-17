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

const UnknownBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="UnknownBlock" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.54 4L3 11.63V28H21V4H9.54Z" fill="#333333" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.37L10.46 6.00098H19V26.001H5V12.37Z" fill="white" />
          <circle cx="20.5" cy="19.5" r="8.5" fill="white" />
          <path
            d="M19.65 22.05H21.35V23.75H19.65V22.05ZM19.65 15.25H21.35V20.35H19.65V15.25ZM20.5 11C15.7995 11 12 14.825 12 19.5C12 21.7543 12.8955 23.9163 14.4896 25.5104C15.2789 26.2997 16.2159 26.9258 17.2472 27.353C18.2785 27.7801 19.3838 28 20.5 28C22.7543 28 24.9163 27.1045 26.5104 25.5104C28.1045 23.9163 29 21.7543 29 19.5C29 18.3838 28.7801 17.2785 28.353 16.2472C27.9258 15.2159 27.2997 14.2789 26.5104 13.4896C25.7211 12.7003 24.7841 12.0742 23.7528 11.647C22.7215 11.2199 21.6162 11 20.5 11V11ZM20.5 26.3C18.6965 26.3 16.9669 25.5836 15.6917 24.3083C14.4164 23.0331 13.7 21.3035 13.7 19.5C13.7 17.6965 14.4164 15.9669 15.6917 14.6917C16.9669 13.4164 18.6965 12.7 20.5 12.7C22.3035 12.7 24.0331 13.4164 25.3083 14.6917C26.5836 15.9669 27.3 17.6965 27.3 19.5C27.3 21.3035 26.5836 23.0331 25.3083 24.3083C24.0331 25.5836 22.3035 26.3 20.5 26.3V26.3Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

UnknownBlock.propTypes = propTypes;
UnknownBlock.defaultProps = defaultProps;

export default UnknownBlock;
