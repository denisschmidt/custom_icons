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

const Search = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Search" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Search</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M19.555278,17.4366021 L16.8869457,14.7582761 C17.5865084,13.6689569 17.9962523,12.3797626 17.9962523,11.0006246 C17.9962523,7.13304185 14.8682074,4.00499688 11.0006246,4.00499688 C7.13304185,4.00499688 4.00499688,7.13304185 4.00499688,11.0006246 C4.00499688,14.8682074 7.13304185,17.9962523 11.0006246,17.9962523 C12.3897564,17.9962523 13.6789507,17.5765147 14.7582761,16.8869457 L17.4366021,19.555278 C17.7064335,19.8251093 18.0861961,19.9950031 18.49594,19.9950031 C19.3254216,19.9950031 19.9950031,19.3254216 19.9950031,18.49594 C19.9950031,18.0861961 19.8251093,17.7064335 19.555278,17.4366021 Z M11.0006246,15.9975016 C8.24234853,15.9975016 6.00374766,13.7589007 6.00374766,11.0006246 C6.00374766,8.24234853 8.24234853,6.00374766 11.0006246,6.00374766 C13.7589007,6.00374766 15.9975016,8.24234853 15.9975016,11.0006246 C15.9975016,13.7589007 13.7589007,15.9975016 11.0006246,15.9975016 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2139.000000, -1795.000000)">
              <g id="Icons-/-Search" transform="translate(2135.000000, 1791.000000)">
                <rect id="Rectangle-Copy-3" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="search" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;