import { Header } from '~/layouts/components';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
