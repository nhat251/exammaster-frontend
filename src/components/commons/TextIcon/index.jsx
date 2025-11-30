import classNames from 'classnames/bind';
import styles from './TextIcon.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function TextIcon({ leftIcon: LeftIcon, text, rightIcon: RightIcon, full = false, customStyle }) {
  const classes = cx('wrapper', {
    full,
  });

  return (
    <div className={classes} style={customStyle}>
      {LeftIcon && (
        <div className={cx('icon')}>
          <LeftIcon style={{ width: '1rem', height: '1rem' }} />
        </div>
      )}

      <p>{text}</p>

      {RightIcon && (
        <div className={cx('icon')}>
          <RightIcon style={{ width: '1rem', height: '1rem' }} />
        </div>
      )}
    </div>
  );
}

export default TextIcon;
