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

const SortDesc = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="SortDesc" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Sort-desc</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M5,15.5 C5.28,15.5 5.53,15.39 5.71,15.21 L6,14.91 L6,18.5 C6,19.05 6.45,19.5 7,19.5 C7.55,19.5 8,19.05 8,18.5 L8,14.91 L8.29,15.2 C8.47,15.39 8.72,15.5 9,15.5 C9.55,15.5 10,15.05 10,14.5 C10,14.22 9.89,13.97 9.71,13.79 L7.71,11.79 C7.53,11.61 7.28,11.5 7,11.5 C6.72,11.5 6.47,11.61 6.29,11.79 L4.29,13.79 C4.11,13.97 4,14.22 4,14.5 C4,15.05 4.45,15.5 5,15.5 Z M13,16.5 L12,16.5 C11.45,16.5 11,16.95 11,17.5 C11,18.05 11.45,18.5 12,18.5 L13,18.5 C13.55,18.5 14,18.05 14,17.5 C14,16.95 13.55,16.5 13,16.5 Z M17,8.5 L12,8.5 C11.45,8.5 11,8.95 11,9.5 C11,10.05 11.45,10.5 12,10.5 L17,10.5 C17.55,10.5 18,10.05 18,9.5 C18,8.95 17.55,8.5 17,8.5 Z M15,12.5 L12,12.5 C11.45,12.5 11,12.95 11,13.5 C11,14.05 11.45,14.5 12,14.5 L15,14.5 C15.55,14.5 16,14.05 16,13.5 C16,12.95 15.55,12.5 15,12.5 Z M19,4.5 L12,4.5 C11.45,4.5 11,4.95 11,5.5 C11,6.05 11.45,6.5 12,6.5 L19,6.5 C19.55,6.5 20,6.05 20,5.5 C20,4.95 19.55,4.5 19,4.5 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1939.000000, -1915.000000)">
              <g id="Icons-/-Sort-desc" transform="translate(1935.000000, 1911.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="sort-desc" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

SortDesc.propTypes = propTypes;
SortDesc.defaultProps = defaultProps;

export default SortDesc;