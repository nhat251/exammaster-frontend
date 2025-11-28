import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Banner, ContinueList } from '~/layouts/components';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
      <div className={cx('body-container')}>
        <ContinueList title="Tiếp tục làm" />
      </div>
    </div>
  );
}

export default Home;
