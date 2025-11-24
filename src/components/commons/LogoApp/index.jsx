import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LogoApp.module.scss';

import images from '~/assets/images';
import { APP_NAME, APP_SLOGAN } from '~/constants/my_const';

const cx = classNames.bind(styles);
function LogoApp({ minimal = true }) {
  return (
    <Link className={cx('wrapper')} to="/">
      <div className={cx('logo')}>
        <img src={images.logo_icon} alt="ExamMaster" />
      </div>
      <div className={cx('text-container')}>
        <span className={cx('app-name')}>{APP_NAME}</span>
        {!minimal && <span className={cx('app-slogan')}>{APP_SLOGAN}</span>}
      </div>
    </Link>
  );
}

export default LogoApp;
