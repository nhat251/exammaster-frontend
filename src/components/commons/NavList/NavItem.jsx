import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './NavList.module.scss';

const cx = classNames.bind(style);

function NavItem({ path, children }) {
  return (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? cx('active') : '')}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
