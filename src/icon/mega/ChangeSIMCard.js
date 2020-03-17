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

const ChangeSIMCard = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="ChangeSIMCard" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7075 20H12.7075V14.67L15.1725 12H18.7075V20ZM20.7075 10H14.1765L10.7075 14V22H20.7075V10ZM29.0005 15.293L27.7915 17.25V16.042C27.7915 12.825 26.5385 9.801 24.2635 7.527C21.9895 5.252 18.9655 4 15.7495 4C12.5335 4 9.5095 5.252 7.2345 7.527L8.6485 8.941C10.5455 7.044 13.0675 6 15.7495 6C18.4315 6 20.9535 7.044 22.8495 8.941C24.7465 10.838 25.7915 13.359 25.7915 16.042L25.7785 17.219L24.4145 15.293L23.0005 16.707L25.9575 20H27.4575L30.4145 16.707L29.0005 15.293ZM15.749 26C13.067 26 10.545 24.956 8.648 23.059C6.752 21.162 5.707 18.64 5.707 15.958V14.75L7 16.707L8.415 15.293L5.457 12H3.957L1 15.293L2.415 16.707L3.707 14.75V15.958C3.707 19.174 4.96 22.198 7.234 24.473C9.509 26.748 12.533 28 15.749 28C18.965 28 21.989 26.748 24.264 24.473L22.85 23.059C20.953 24.956 18.431 26 15.749 26"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ChangeSIMCard.propTypes = propTypes;
ChangeSIMCard.defaultProps = defaultProps;

export default ChangeSIMCard;
