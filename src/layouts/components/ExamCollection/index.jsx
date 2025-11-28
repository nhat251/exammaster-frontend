import classNames from 'classnames/bind';
import styles from './ExamCollection.module.scss';

import React, { useEffect, useState } from 'react';
import { Clock, Layers, RefreshCcw } from 'lucide-react';

import { Button, CardBorder, Tags, TextIcon } from '~/components/commons';
import { timeAgo } from '~/utils';
import { Tooltip } from '@mui/material';
import { getListCollections } from '~/services/examService';

const cx = classNames.bind(styles);
function ExamCollection({ title, subTitle }) {
  const [collectionsList, setCollectionsList] = useState([]);

  useEffect(() => {
    const initHomePage = async () => {
      const unfinishexam = await getListCollections({ page: 1, size: 3 });
      if (unfinishexam) {
        setCollectionsList(unfinishexam.items);
      }
    };
    initHomePage();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('section-title')}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div className={cx('container')}>
        {collectionsList.map((collection) => {
          return (
            <CardBorder key={collection.id}>
              <div className={cx('item')}>
                <Tooltip title={collection.title} placement="top" arrow>
                  <h3 className={cx('collection-title')}>{collection.title}</h3>
                </Tooltip>

                <div className={cx('tags')}>
                  <Tags tags={collection.tags} prefix="#" maxVisible={3} />
                </div>

                <TextIcon text={`${collection.totalExams} đề`} leftIcon={Layers} full />
                <TextIcon text={`Tổng thời gian: ${collection.totalDurations} phút`} leftIcon={Clock} full />
                <TextIcon text={`${timeAgo(collection.updatedAt)}`} leftIcon={RefreshCcw} full />

                <Button
                  contained
                  textColor="var(--white) !important"
                  style={{ fontWeight: 400, width: '100%' }}
                  to={`/collections/detail?id=${collection.collectionId}`}
                >
                  Xem chi tiết
                </Button>
              </div>
            </CardBorder>
          );
        })}
      </div>
    </div>
  );
}

export default ExamCollection;
