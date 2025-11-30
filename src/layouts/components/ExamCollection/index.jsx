import classNames from 'classnames/bind';
import styles from './ExamCollection.module.scss';

import React, { useEffect, useState } from 'react';
import { Clock, Layers, RefreshCcw } from 'lucide-react';

import { Button, CardBorder, Tags, TextIcon } from '~/components/commons';
import { timeAgo } from '~/utils';
import { Tooltip } from '@mui/material';
import { getListCollections } from '~/services/examService';
import CollectionItem from './CollectionItem';

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
          return <CollectionItem key={collection.id} collection={collection} />;
        })}
      </div>
    </div>
  );
}

export default ExamCollection;
