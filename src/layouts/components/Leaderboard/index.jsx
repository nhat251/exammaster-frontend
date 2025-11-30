import classNames from 'classnames/bind';
import styles from './Leaderboard.module.scss';

import React, { useEffect, useState } from 'react';

import { Button, CardBorder } from '~/components/commons';
import { fetchListUserByPoints } from '~/services/leaderboardService';
import PodiumPlayer from './PodiumPlayer';

const cx = classNames.bind(styles);

function Leaderboard() {
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    const init = async () => {
      const response = await fetchListUserByPoints();
      setTopThree(response.items);
    };
    init();
  }, []);

  if (topThree.length === 0) return null;

  return (
    <div className={cx('wrapper')}>
      <CardBorder style={{ width: '100%' }}>
        <h2 className={cx('header')}>Top 3 tuần này</h2>
        <div className={cx('container')}>
          <div className={cx('leaderboard-podium')}>
            {topThree.map((player, index) => (
              <PodiumPlayer
                key={player.userId}
                rank={index + 1}
                name={player.userName}
                totalPoints={player.totalPoints}
              />
            ))}
          </div>
          <div className={cx('actions')}>
            <Button contained textColor="var(--white) !important" to={`/leaderboard`}>
              Xem bảng xếp hạng đầy đủ
            </Button>
          </div>
        </div>
      </CardBorder>
    </div>
  );
}

export default Leaderboard;
