import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { NavList, LogoApp, SearchBar } from '~/components/commons/';
import { Avatar } from '@mui/material';
import images from '~/assets/images';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
  const navArray = [
    { path: '/', text: 'Trang chủ' },
    { path: '/my-learning', text: 'Đang học' },
    { path: '/contribute', text: 'Đóng góp' },
    { path: '/contact', text: 'Liên hệ' },
  ];

  const user = { username: 'Nsntfoz', avatar: images.defaultAvatar, balance: 2450 };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-inner')}>
        <div className={cx('header-left')}>
          <div>
            <LogoApp minimal={false} />
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className={cx('header-right')}>
          <div className={cx('nav-bar')}>
            <NavList list={navArray} />
          </div>

          <div className={cx('user-info')}>
            {user ? (
              <>
                <NavLink className={cx('points-badge')} to="/wallet">
                  <img src={images.points_badge} alt="" />
                  {user.balance}
                </NavLink>
                <Avatar sx={{ width: '2rem', height: '2rem' }} alt={user.username} src={user.avatar} />
              </>
            ) : (
              <>
                <button className={cx('custom-login')}>Log in</button>
                <button className={cx('custom-register')}>Register</button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
