import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProgressBar.module.scss';
const cx = classNames.bind(styles);

function ProgressBar({ minimal = false, progress }) {
  let backgroundColor = 'low';

  if (progress > 25 && progress < 49) {
    backgroundColor = 'medium';
  } else if (progress > 49) {
    backgroundColor = 'high';
  }

  const classes = cx('progress-bar', backgroundColor);

  const progressStyle = {};

  if (progress) progressStyle.width = `${progress}%`;

  return (
    <>
      <div className={cx('wrapper')}>
        {!minimal && (
          <div className={cx('progress-text')}>
            <p>{progress}%</p>
          </div>
        )}
        <div className={cx('background')}>
          <div className={classes} style={progressStyle}></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
