import classNames from 'classnames/bind';
import styles from './ContinueList.module.scss';

import React from 'react';
import { Clock } from 'lucide-react';
import { Tooltip } from '@mui/material';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { Button, CardBorder, ProgressBar, Tags } from '~/components/commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ContinueList({ title, continueList }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('section-title')}>{title}</h2>
      <div className={cx('continue-items')}>
        {continueList.map((exam) => {
          const progress = Math.round((exam.completedCount / exam.totalQuestion) * 100);

          return (
            <CardBorder key={exam.id}>
              <div className={cx('item')}>
                <div className={cx('header')}>
                  <div className={cx('tags')}>
                    <Tags tags={exam.tags} />
                  </div>
                  <Tooltip placement="top" title="Mark as favourite exam" arrow>
                    <div className={cx('favourite-icon')}>
                      <FontAwesomeIcon icon={faBookmark} className={exam.isFavourite ? cx('marked') : ''} />
                    </div>
                  </Tooltip>
                </div>

                <h3>{exam.title}</h3>
                <Tooltip title={exam.description} placement="top" arrow>
                  <p className={cx('desciption')}>{exam.description}</p>
                </Tooltip>

                <div className={cx('progress-bar')}>
                  <ProgressBar progress={progress} />
                </div>

                <div className={cx('footer')}>
                  <p className={cx('price')}>{exam.price} points</p>
                  <div className={cx('duration')}>
                    <div className={cx('clock-icon')}>
                      <Clock style={{ width: '1rem', height: '1rem' }} />
                    </div>
                    <p>{exam.duration} min</p>
                  </div>

                  <Button
                    small
                    contained
                    textColor="var(--white) !important"
                    style={{ fontWeight: 400 }}
                    to={`/exams/continue?id=${exam.id}`}
                  >
                    Tiếp tục
                  </Button>
                </div>
              </div>
            </CardBorder>
          );
        })}
      </div>
    </div>
  );
}

export default ContinueList;
