import classNames from 'classnames/bind';
import styles from './Leaderboard.module.scss';

import React from 'react';

import { formatNumber } from '~/utils';
import { Crown } from 'lucide-react';
import { useAuth } from '~/hooks';

const cx = classNames.bind(styles);

function PodiumPlayer({ rank, name, totalPoints }) {
  const { user } = useAuth();
  const isCurrentUser = user?.userName === name;

  return (
    <div className={cx('podium-player', `rank-${rank}`, { 'current-user': isCurrentUser })}>
      <div className={cx('avatar')}>
        {rank === 1 ? (
          <Crown className={cx('crown')} size={'4rem'} />
        ) : (
          <span className={cx('rank-number')}>{rank}</span>
        )}
      </div>

      <h3 className={cx('name')}>
        {name} {isCurrentUser ? '(You)' : ''}
      </h3>

      <div className={cx('points')}>
        <span className={cx('value')}>{formatNumber(totalPoints)}</span>
        <span className={cx('label')}>points</span>
      </div>
    </div>
  );
}

export default PodiumPlayer;
