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

const TimeBlock = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="TimeBlock" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Time block</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4.00499688 C16.4172392,4.00499688 19.9950031,7.58276077 19.9950031,12 C19.9950031,16.4172392 16.4172392,19.9950031 12,19.9950031 C7.58276077,19.9950031 4.00499688,16.4172392 4.00499688,12 C4.00499688,7.58276077 7.58276077,4.00499688 12,4.00499688 Z M12,8 C11.45,8 11,8.45 11,9 L11,13 C11,13.28 11.11,13.53 11.29,13.71 L13.29,15.71 C13.47,15.89 13.72,16 14,16 C14.55,16 15,15.55 15,15 C15,14.72 14.89,14.47 14.71,14.29 L13,12.59 L13,9 C13,8.45 12.55,8 12,8 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1899.000000, -1955.000000)">
              <g id="Icons-/--Time-block" transform="translate(1895.000000, 1951.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="error" fill="#D34C4C" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

TimeBlock.propTypes = propTypes;
TimeBlock.defaultProps = defaultProps;

export default TimeBlock;