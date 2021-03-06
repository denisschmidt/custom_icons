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

const Products = ({ size, ...restProps }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Icon title="Products" viewBox="0 0 24 24" width={ICON_SIZES[size]} height={ICON_SIZES[size]} theme={theme} {...restProps}>
          <g id="Icons / Products">
            <path
              id="application"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 5H5C4.45 5 4 5.45 4 6V18C4 18.55 4.45 19 5 19H19C19.55 19 20 18.55 20 18V6C20 5.45 19.55 5 19 5ZM7.5 11H14.5C14.78 11 15 10.78 15 10.5C15 10.22 14.78 10 14.5 10H7.5C7.22 10 7 10.22 7 10.5C7 10.78 7.22 11 7.5 11ZM6 17H18V9H6V17ZM7.5 13H11.5C11.78 13 12 12.78 12 12.5C12 12.22 11.78 12 11.5 12H7.5C7.22 12 7 12.22 7 12.5C7 12.78 7.22 13 7.5 13ZM12.5 15H7.5C7.22 15 7 14.78 7 14.5C7 14.22 7.22 14 7.5 14H12.5C12.78 14 13 14.22 13 14.5C13 14.78 12.78 15 12.5 15Z"
              fill="#6C808B"
            />
          </g>
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
