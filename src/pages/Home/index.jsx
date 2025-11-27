import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Banner, ContinueList } from '~/layouts/components';

const cx = classNames.bind(styles);

function Home() {
  const tags = [
    { tagId: '1', tagString: 'Easy' },
    { tagId: '2', tagString: 'Medium' },
    { tagId: '3', tagString: 'Hard' },
    { tagId: '4', tagString: 'Premium' },
    { tagId: '5', tagString: 'Free' },
    { tagId: '6', tagString: 'Popular' },
  ];

  const [list, setList] = useState([
    {
      id: '1',
      title: 'Advanced Calculus Final Exam',
      description: 'Comprehensive test',
      duration: 120,
      price: 2000,
      totalQuestion: 50,
      completedCount: 20,
      tags: [tags[1], tags[4], tags[5]],
      isFavourite: true,
    },
    {
      id: '12',
      title: 'Ngu thì chịu',
      description: 'Comprelại nét',
      duration: 15,
      price: 1000,
      totalQuestion: 20,
      completedCount: 18,
      tags: [tags[0], tags[3], tags[5]],
      isFavourite: false,
    },
    {
      id: '123',
      title: 'Ngu thì chịu',
      description:
        'toleic toi la sieu nhan hahahahha mot nguoi dep trai vcler nhaaaaaaaaaaaaaaaaaaaaaaaaa va khong beit nua ,',
      duration: 15,
      price: 1000,
      totalQuestion: 13,
      completedCount: 1,
      tags: [tags[2], tags[3]],
      isFavourite: false,
    },
  ]);

  return (
    <div className={cx('wrapper')}>
      <Banner />
      <div className={cx('body-container')}>
        <ContinueList title="Tiếp tục làm" continueList={list} />
      </div>
    </div>
  );
}

export default Home;
