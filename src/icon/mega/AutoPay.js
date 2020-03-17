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

const AutoPay = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="AutoPay" viewBox="0 0 32 32" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <rect width="32" height="32" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.2935 15.293L28.0845 17.25V16.042C28.0845 12.825 26.8315 9.801 24.5565 7.527C22.2825 5.252 19.2585 4 16.0425 4C12.8265 4 9.80247 5.252 7.52747 7.527L8.94147 8.941C10.8385 7.044 13.3605 6 16.0425 6C18.7245 6 21.2465 7.044 23.1425 8.941C25.0395 10.838 26.0845 13.359 26.0845 16.042L26.0715 17.219L24.7075 15.293L23.2935 16.707L26.2505 20H27.7505L30.7075 16.707L29.2935 15.293ZM17.0063 14.9907C18.1083 14.9907 19.0003 14.0947 19.0003 12.9927C19.0003 11.8907 18.1083 10.9947 17.0063 10.9947H15.0003V14.9907H17.0063ZM17.0063 8.9997C19.2073 8.9997 21.0003 10.7917 21.0003 12.9927C21.0003 15.1947 19.2073 16.9857 17.0063 16.9857H15.0003V18.9997H19.0003V20.9997H15.0003V22.9997H13.0003V20.9997H11.0003V18.9997H13.0003V16.9997H11.0003V14.9997H13.0003V8.9997H17.0063ZM8.94097 23.059C10.838 24.956 13.36 26 16.042 26C18.724 26 21.246 24.956 23.143 23.059L24.557 24.473C22.282 26.748 19.258 28 16.042 28C12.826 28 9.80197 26.748 7.52697 24.473C5.25297 22.198 3.99997 19.174 3.99997 15.958V14.75L2.70797 16.707L1.29297 15.293L4.24997 12H5.74997L8.70797 15.293L7.29297 16.707L5.99997 14.75V15.958C5.99997 18.64 7.04497 21.162 8.94097 23.059Z"
            fill="#333333"
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

AutoPay.propTypes = propTypes;
AutoPay.defaultProps = defaultProps;

export default AutoPay;
