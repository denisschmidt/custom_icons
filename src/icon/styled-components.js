import {styled} from '../styles/index.js';

export function getSvgStyles({
  $theme,
  $size,
  $color,
}) {
  if ($size) {
    if ($theme.sizing[$size]) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = `${$size}px`;
    }
  } else {
    $size = $theme.sizing.scale600;
  }
  if ($color && $theme.colors[$color]) {
    $color = $theme.colors[$color];
  }

  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size,
  };
}

export const Svg = styled('svg', getSvgStyles);