import classNames from 'classnames/bind';
import styles from './ContinueList.module.scss';

import { Clock, Hourglass } from 'lucide-react';
import { Tooltip } from '@mui/material';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, CardBorder, ProgressBar, Tags, TextIcon } from '~/components/commons';
import { formatExpire, formatNumber } from '~/utils';

const cx = classNames.bind(styles);

function ContinueItem({ attemp, toggleMarkFavourite }) {
  const progress = Math.round((attemp.completedCount / attemp.totalQuestion) * 100);
  return (
    <CardBorder key={attemp.attempId}>
      <div className={cx('item')}>
        <div className={cx('header')}>
          <div className={cx('tags')}>
            <Tags tags={attemp.tags} maxVisible={3} />
          </div>
          <Tooltip placement="top" title="Mark as favourite exam" arrow>
            <div onClick={() => toggleMarkFavourite(attemp)} className={cx('favourite-icon')}>
              <FontAwesomeIcon icon={faBookmark} className={attemp.isFavourite ? cx('marked') : ''} />
            </div>
          </Tooltip>
        </div>

        <h3>{attemp.title}</h3>
        <Tooltip title={attemp.description} placement="top" arrow>
          <p className={cx('desciption')}>{attemp.description}</p>
        </Tooltip>

        <div className={cx('progress-bar')}>
          <ProgressBar progress={progress} />
        </div>

        <div className={cx('time')}>
          <TextIcon leftIcon={Clock} text={`${attemp.duration} phút`} />
          <TextIcon leftIcon={Hourglass} text={formatExpire(attemp.expiredAt)} customStyle={{ marginLeft: 'auto' }} />
        </div>

        <div className={cx('footer')}>
          <p className={cx('points')}>{formatNumber(attemp.points)} points</p>

          <Button
            small
            contained
            textColor="var(--white) !important"
            style={{ fontWeight: 400 }}
            to={`/exams/continue?id=${attemp.attempId}`}
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </CardBorder>
  );
}

export default ContinueItem;
