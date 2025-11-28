import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { NavList, LogoApp, SearchBar, Button } from '~/components/commons/';
import { Avatar } from '@mui/material';
import images from '~/assets/images';
import { NavLink } from 'react-router-dom';
import { useAuth } from '~/hooks';
import { formatNumber } from '~/utils';

const cx = classNames.bind(styles);

function Header() {
  const navArray = [
    { path: '/', text: 'Trang chủ' },
    { path: '/my-learning', text: 'Đang học' },
    { path: '/contribute', text: 'Đóng góp' },
    { path: '/contact', text: 'Liên hệ' },
    { path: '/exams', text: 'Tất cả đề' },
  ];

  const { user, handleLogout } = useAuth();

  const logout = async () => {
    await handleLogout();
  };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-inner')}>
        <div className={cx('header-left')}>
          <div>
            <LogoApp />
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
                  {formatNumber(user.balance)}
                </NavLink>
                <Avatar sx={{ width: '2rem', height: '2rem' }} alt={user.username} src={user.avatar} onClick={logout} />
              </>
            ) : (
              <>
                <Button small outline className={cx('custom-login')} to="/login">
                  Log in
                </Button>
                <Button
                  small
                  contained
                  textColor="var(--white) !important"
                  className={cx('custom-register')}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
