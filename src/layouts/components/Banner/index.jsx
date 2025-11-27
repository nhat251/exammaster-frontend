import React from 'react';
import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import { Button } from '~/components/commons';
import BattleIcon from '~/assets/images/battle_icon.svg?react';

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Nền tảng luyện thi trực tuyến thông minh</h1>
      <p className={cx('sub-title')}>
        Luyện tập, cạnh tranh và vượt trội với nền tảng luyện thi toàn diện của chúng tôi
      </p>
      <div className={cx('actions')}>
        <Button
          contained
          bgColor="white"
          textColor="var(--blue-color) !important"
          className={cx('start-now')}
          to="/exams"
        >
          Bắt đầu ngay
        </Button>
        <Button
          leftIcon={<BattleIcon className={cx('battle-icon')} />}
          outline
          textColor="var(--white) !important"
          className={cx('battle-mode')}
          to="/battle-mode"
        >
          Chế độ thi đấu
        </Button>
      </div>
    </div>
  );
}

export default Banner;
