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

const User = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="User" viewBox="0 0 16 16" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <title>Icons / User</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
              d="M11.9850281,4 C7.57330006,4 4,7.5777639 4,11.9950031 C4,12.2548407 4.00998129,12.5146783 4.03992514,12.7745159 C4.04990643,12.8644597 4.069869,12.9544035 4.07985028,13.054341 C4.09981285,13.2042473 4.11977542,13.3641474 4.14971928,13.5240475 C4.16968185,13.6339788 4.1996257,13.7439101 4.22956956,13.8638351 C4.25951341,13.9937539 4.28945727,14.1236727 4.32938241,14.2435978 C4.36930755,14.3635228 4.40923269,14.4934416 4.44915783,14.6133666 C4.48908297,14.7232979 4.52900811,14.8232355 4.56893325,14.9331668 C4.61883968,15.0630856 4.67872739,15.1930044 4.7386151,15.3229232 C4.77854024,15.412867 4.81846538,15.492817 4.8683718,15.5827608 C4.9382408,15.7226733 5.00810979,15.8525921 5.08796007,15.9825109 C5.12788522,16.0524672 5.16781036,16.1124297 5.2077355,16.182386 L5.47723019,16.6021237 C5.50717405,16.6420987 5.54709919,16.6920675 5.57704304,16.7320425 C6.52526513,18.0212367 7.85277604,19.0206121 9.39987523,19.5502811 C9.42981909,19.5602748 9.44978166,19.5702686 9.46974423,19.5802623 C9.83905178,19.7001874 10.2183406,19.8001249 10.6076107,19.8700812 C10.6774797,19.880075 10.7373674,19.8900687 10.8072364,19.9000625 C11.1965066,19.960025 11.595758,20 12.0049906,20 C12.4142233,20 12.8134747,19.960025 13.2027449,19.9000625 C13.2726138,19.8900687 13.3325016,19.880075 13.4023706,19.8700812 C13.7916407,19.8001249 14.1709295,19.7101811 14.5402371,19.5802623 C14.5701809,19.5702686 14.5901435,19.5602748 14.6101061,19.5502811 C16.1572052,19.0106184 17.4847162,18.0212367 18.4329382,16.7320425 C18.4628821,16.6920675 18.492826,16.6520924 18.5227698,16.6021237 C18.6225827,16.4622111 18.7124142,16.3222986 18.8022458,16.182386 C18.8421709,16.1124297 18.8820961,16.0524672 18.9220212,15.9825109 C19.0018715,15.8525921 19.0717405,15.7126796 19.1416095,15.572767 C19.1815346,15.492817 19.2214598,15.4028732 19.2613849,15.3129294 C19.3212726,15.1830106 19.371179,15.0530918 19.4310667,14.923173 C19.4709919,14.8232355 19.510917,14.7133042 19.5508422,14.6033729 C19.5907673,14.4834478 19.6306925,14.3635228 19.6706176,14.233604 C19.7105427,14.1036852 19.7404866,13.9837601 19.7704304,13.8538413 C19.8003743,13.7439101 19.8303182,13.6339788 19.8502807,13.5140537 C19.8802246,13.3541537 19.9001871,13.2042473 19.9201497,13.0443473 C19.930131,12.9544035 19.9500936,12.8644597 19.9600749,12.7645222 C19.9800374,12.5046846 20,12.2548407 20,11.9850094 C19.9700561,7.5777639 16.3967561,4 11.9850281,4 L11.9850281,4 Z M11.9850281,18.3910056 C10.0087336,18.3910056 8.24204616,17.4915678 7.07423581,16.0824485 C7.74298191,15.7226733 8.56144729,15.4228607 9.21023082,15.1330418 C10.3680599,14.6133666 10.2482845,14.2935665 10.2882096,13.8638351 C10.2981909,13.8038726 10.2981909,13.7539038 10.2981909,13.6939413 C9.8889582,13.3341661 9.5595758,12.8344785 9.33998752,12.2548407 L9.33998752,12.244847 C9.33998752,12.2348532 9.33000624,12.2248595 9.33000624,12.2248595 C9.28009981,12.0949407 9.24017467,11.9650219 9.21023082,11.8351031 C8.93075483,11.7851343 8.77105427,11.4853217 8.71116656,11.2054966 C8.65127885,11.0955653 8.53150343,10.8257339 8.56144729,10.5159275 C8.60137243,10.1061836 8.76107299,9.92629606 8.94073612,9.84634603 L8.94073612,9.78638351 C8.94073612,9.27670206 8.99064255,8.54715803 9.08047411,8.06745784 C9.10043668,7.93753904 9.13038054,7.80762024 9.17030568,7.67770144 C9.33998752,7.08806996 9.69931379,6.558401 10.1784155,6.1886321 C10.6674984,5.80886946 11.3661884,5.59900062 11.9950094,5.59900062 C12.613849,5.59900062 13.312539,5.7988757 13.8116032,6.1886321 C14.2907049,6.558401 14.6500312,7.08806996 14.819713,7.67770144 C14.8596382,7.80762024 14.889582,7.93753904 14.9095446,8.07745159 C14.9993762,8.55715178 15.0492826,9.28669582 15.0492826,9.79637726 L15.0492826,9.86633354 C15.2289457,9.94628357 15.378665,10.1261711 15.4185901,10.5259213 C15.448534,10.8357277 15.3187773,11.105559 15.2588896,11.2154903 C15.1990019,11.4853217 15.0492826,11.7851343 14.7797879,11.8351031 C14.749844,11.9650219 14.7099189,12.0949407 14.6600125,12.2148657 C14.6600125,12.2248595 14.6500312,12.2548407 14.6500312,12.2548407 C14.4404242,12.8244847 14.1110418,13.3141786 13.7117904,13.6739538 C13.7117904,13.7339163 13.7217717,13.8038726 13.7217717,13.8638351 C13.7616968,14.2935665 13.6019963,14.6133666 14.7698066,15.1330418 C15.4185901,15.4228607 16.2370555,15.7326671 16.9058016,16.0824485 C15.72801,17.4915678 13.9613225,18.3910056 11.9850281,18.3910056 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Иконки-CMP" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <g id="Artboard" transform="translate(-2259.000000, -1795.000000)">
              <g id="Icons-/-User" transform="translate(2255.000000, 1791.000000)">
                <rect id="Rectangle-Copy-5" x="0" y="0" width="24" height="24"></rect>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use id="user" fill="#6C808B" fillRule="nonzero" xlinkHref="#path-1"></use>
              </g>
            </g>
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;