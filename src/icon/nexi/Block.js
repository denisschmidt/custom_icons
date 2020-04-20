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

const Block = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Block" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Block</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M12,4.00499688 C16.4172392,4.00499688 19.9950031,7.58276077 19.9950031,12 C19.9950031,16.4172392 16.4172392,19.9950031 12,19.9950031 C7.58276077,19.9950031 4.00499688,16.4172392 4.00499688,12 C4.00499688,7.58276077 7.58276077,4.00499688 12,4.00499688 Z M14.9956277,8 C14.7158026,8 14.4659588,8.10993129 14.2860712,8.28981886 L11.9975016,10.5883823 L9.70893192,8.29981262 C9.52904435,8.10993129 9.2792005,8 8.99937539,8 C8.44971893,8 8,8.44971893 8,8.99937539 C8,9.2792005 8.10993129,9.52904435 8.28981886,9.70893192 L10.5783885,11.9975016 L8.28981886,14.2860712 C8.10993129,14.4659588 8,14.7158026 8,14.9956277 C8,15.5452842 8.44971893,15.9950031 8.99937539,15.9950031 C9.2792005,15.9950031 9.52904435,15.8850718 9.70893192,15.7051843 L11.9975016,13.4166146 L14.2860712,15.7051843 C14.4659588,15.8850718 14.7158026,15.9950031 14.9956277,15.9950031 C15.5452842,15.9950031 15.9950031,15.5452842 15.9950031,14.9956277 C15.9950031,14.7158026 15.8850718,14.4659588 15.7051843,14.2860712 L13.4166146,11.9975016 L15.7051843,9.70893192 C15.8850718,9.52904435 15.9950031,9.2792005 15.9950031,8.99937539 C15.9950031,8.44971893 15.5452842,8 14.9956277,8 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-1939.000000, -1955.000000)">
              <g id="Icons-/-Block" transform="translate(1935.000000, 1951.000000)">
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

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
