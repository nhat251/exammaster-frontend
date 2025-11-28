import React from 'react';

import classNames from 'classnames/bind';
import styles from './Tags.module.scss';
3;

const cx = classNames.bind(styles);

function Tag({ name, bgColor, textColor, isMore = false }) {
  const customStyle = [];

  if (bgColor) customStyle.background = bgColor;
  if (textColor) customStyle.textColor = textColor;

  if (isMore) {
    customStyle.background = '#e5e7eb'; // màu nhạt hơn
    customStyle.color = '#6b7280'; // xám hơn
    customStyle.fontWeight = '600';
  }

  return (
    <div className={cx('tag-item')} style={customStyle}>
      {name}
    </div>
  );
}

export default Tag;
