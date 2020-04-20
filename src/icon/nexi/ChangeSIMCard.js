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
        <Icon title="ChangeSIMCard" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / Change SIM-card</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M18.9956277,11.0006246 C18.4459713,11.0006246 17.9962523,11.4503435 17.9962523,12 C17.9962523,15.3079325 15.3079325,17.9962523 12,17.9962523 C10.2311056,17.9962523 8.64209869,17.2167395 7.54278576,15.9975016 L9.00187383,15.9975016 C9.55153029,15.9975016 10.0012492,15.5477826 10.0012492,14.9981262 C10.0012492,14.4484697 9.55153029,13.9987508 9.00187383,13.9987508 L5.00437227,13.9987508 C4.4547158,13.9987508 4.00499688,14.4484697 4.00499688,14.9981262 L4.00499688,18.9956277 C4.00499688,19.5452842 4.4547158,19.9950031 5.00437227,19.9950031 C5.55402873,19.9950031 6.00374766,19.5452842 6.00374766,18.9956277 L6.00374766,17.2567146 C7.46283573,18.9256715 9.60149906,19.9950031 12,19.9950031 C16.4172392,19.9950031 19.9950031,16.4172392 19.9950031,12 C19.9950031,11.4503435 19.5452842,11.0006246 18.9956277,11.0006246 Z M18.9956277,4.00499688 C18.4459713,4.00499688 17.9962523,4.4547158 17.9962523,5.00437227 L17.9962523,6.74328545 C16.5371643,5.07432854 14.3985009,4.00499688 12,4.00499688 C7.58276077,4.00499688 4.00499688,7.58276077 4.00499688,12 C4.00499688,12.5496565 4.4547158,12.9993754 5.00437227,12.9993754 C5.55402873,12.9993754 6.00374766,12.5496565 6.00374766,12 C6.00374766,8.69206746 8.69206746,6.00374766 12,6.00374766 C13.7688944,6.00374766 15.3579013,6.78326046 16.4572142,8.00249844 L14.9981262,8.00249844 C14.4484697,8.00249844 13.9987508,8.45221736 13.9987508,9.00187383 C13.9987508,9.55153029 14.4484697,10.0012492 14.9981262,10.0012492 L18.9956277,10.0012492 C19.5452842,10.0012492 19.9950031,9.55153029 19.9950031,9.00187383 L19.9950031,5.00437227 C19.9950031,4.4547158 19.5452842,4.00499688 18.9956277,4.00499688 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2219.000000, -1915.000000)">
              <g id="Icons-/-Change-SIM-card" transform="translate(2215.000000, 1911.000000)">
                <rect id="Rectangle-Copy-6" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="refresh" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

ChangeSIMCard.propTypes = propTypes;
ChangeSIMCard.defaultProps = defaultProps;

export default ChangeSIMCard;
