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
        <Icon title="Map" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Map</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M19.55,7.17 L15.06,4.17 C14.9,4.06 14.71,4 14.5,4 C14.31,4 14.14,4.06 13.99,4.15 L9.53,6.82 L5.56,4.17 C5.4,4.06 5.21,4 5,4 C4.45,4 4,4.45 4,5 L4,16 C4,16.35 4.18,16.65 4.45,16.83 L8.94,19.83 C9.1,19.94 9.29,20 9.5,20 C9.69,20 9.86,19.94 10.01,19.85 L14.47,17.18 L18.44,19.83 C18.6,19.94 18.79,20 19,20 C19.55,20 20,19.55 20,19 L20,8 C20,7.65 19.82,7.35 19.55,7.17 Z M9,17.46 L6,15.46 L6,6.86 L8.94,8.82 C8.96,8.84 8.98,8.85 9,8.86 L9,17.46 L9,17.46 Z M14,15.14 C14,15.14 13.99,15.14 13.99,15.15 L10,17.53 L10,8.86 C10,8.86 10.01,8.86 10.01,8.85 L14,6.47 L14,15.14 Z M18,17.13 L15.06,15.17 C15.04,15.16 15.02,15.15 15.01,15.14 L15.01,6.54 L18.01,8.54 L18.01,17.13 L18,17.13 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2019.000000, -1875.000000)">
              <g id="Icons-/-Map" transform="translate(2015.000000, 1871.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="map" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;
