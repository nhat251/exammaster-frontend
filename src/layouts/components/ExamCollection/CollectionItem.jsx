import classNames from 'classnames/bind';
import styles from './ExamCollection.module.scss';

import { Clock, Layers, RefreshCcw } from 'lucide-react';

import { Button, CardBorder, Tags, TextIcon } from '~/components/commons';
import { timeAgo } from '~/utils';
import { Tooltip } from '@mui/material';

const cx = classNames.bind(styles);

function CollectionItem({ collection }) {
  return (
    <CardBorder>
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
          to={`/collections/detail?id=${collection.id}`}
        >
          Xem chi tiết
        </Button>
      </div>
    </CardBorder>
  );
}

export default CollectionItem;
