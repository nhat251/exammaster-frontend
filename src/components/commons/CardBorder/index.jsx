import React from 'react';
import classNames from 'classnames/bind';

import styles from './CardBorder.module.scss';

const cx = classNames.bind(styles);
function CardBorder({ children, ...props }) {
  return (
    <div className={cx('wrapper')} {...props}>
      {children}
    </div>
  );
}

export default CardBorder;
