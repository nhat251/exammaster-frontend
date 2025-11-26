import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Banner } from '~/layouts/components';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
    </div>
  );
}

export default Home;
