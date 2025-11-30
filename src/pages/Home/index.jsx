import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { Banner, ContinueList, ExamCollection, Leaderboard } from '~/layouts/components';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
      <div className={cx('body-container')}>
        <ContinueList title="Tiếp tục làm" />
        <ExamCollection title="Các bộ đề thi" subTitle="Chọn lĩnh vực bạn muốn luyện tập" />
        <Leaderboard />
      </div>
    </div>
  );
}

export default Home;
