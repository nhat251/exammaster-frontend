import classNames from 'classnames/bind';
import styles from './MyLearning.module.scss';

import React from 'react';

import { ContinueList, Leaderboard } from '~/layouts/components';

const cx = classNames.bind(styles);
function MyLearning() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <Leaderboard />
          <ContinueList title="Tiếp tục làm" />
        </div>
      </div>
    </>
  );
}

export default MyLearning;
