import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  contained = false,
  outline = false,
  text = false,
  rounded = false,
  disable = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  // Custom colors
  bgColor,
  textColor,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  // 🔗 Link hoặc <a>
  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  // 🎨 Áp dụng className
  const classes = cx('wrapper', {
    [className ?? '']: !!className,
    contained,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
  });

  const customStyle = {};

  if (bgColor) customStyle.background = bgColor;
  if (textColor) customStyle.color = textColor;
  if (borderColor) customStyle.borderColor = borderColor;

  // Hover styles (using CSS variables)
  const hoverStyles = {};
  if (hoverBgColor) hoverStyles['--hover-bg'] = hoverBgColor;
  if (hoverTextColor) hoverStyles['--hover-color'] = hoverTextColor;

  const finalStyle = { ...customStyle, ...hoverStyles, ...props.style };

  return (
    <Comp className={classes} {...props} style={finalStyle}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
