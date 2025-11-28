import classNames from 'classnames/bind';
import styles from './ContinueList.module.scss';

import { useEffect, useState } from 'react';
import { Clock, Hourglass } from 'lucide-react';
import { Tooltip } from '@mui/material';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchUnFinishedExams, unMarkAsFavourite, markAsFavourite } from '~/services/examService';
import { Button, CardBorder, ProgressBar, Tags } from '~/components/commons';
import { formatExpire } from '~/utils';
import { useAuth } from '~/hooks';

const cx = classNames.bind(styles);

function ContinueList({ title }) {
  const [unfinishExamPageResult, setUnfinishExamPageResult] = useState([]);

  const { user } = useAuth();

  const toggleMarkFavourite = async (attemp) => {
    let message;
    if (attemp.isFavourite) {
      message = await unMarkAsFavourite(attemp.examId);
    } else {
      message = await markAsFavourite(attemp.examId);
    }

    attemp.isFavourite = !attemp.isFavourite;

    setUnfinishExamPageResult((prevState) => prevState.map((at) => (at.attempId === attemp.attempId ? attemp : at)));

    console.log(message);
  };

  useEffect(() => {
    const initHomePage = async () => {
      if (!user) {
        setUnfinishExamPageResult([]);
        return;
      }
      const unfinishexam = await fetchUnFinishedExams({ page: 1, size: 2 });
      if (unfinishexam) {
        setUnfinishExamPageResult(unfinishexam.items);
      }
    };
    initHomePage();
  }, [user]);

  let render = <></>;

  if (unfinishExamPageResult.length > 0) {
    render = (
      <div className={cx('wrapper')}>
        <h2 className={cx('section-title')}>{title}</h2>
        <div className={cx('continue-items')}>
          {unfinishExamPageResult.map((attemp) => {
            const progress = Math.round((attemp.completedCount / attemp.totalQuestion) * 100);
            return (
              <CardBorder key={attemp.attempId}>
                <div className={cx('item')}>
                  <div className={cx('header')}>
                    <div className={cx('tags')}>
                      <Tags tags={attemp.tags} />
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
                    <div className={cx('wrapper-time')}>
                      <div className={cx('wrapper-icon')}>
                        <Clock style={{ width: '1rem', height: '1rem' }} />
                      </div>
                      <p>{attemp.duration} min</p>
                    </div>

                    <div className={cx('wrapper-time', 'due-time')}>
                      <div className={cx('wrapper-icon')}>
                        <Hourglass style={{ width: '1rem', height: '1rem' }} />
                      </div>
                      <p>{formatExpire(attemp.expiredAt)}</p>
                    </div>
                  </div>

                  <div className={cx('footer')}>
                    <p className={cx('price')}>{attemp.price} points</p>

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
          })}
        </div>
      </div>
    );
  }

  return render;
}

export default ContinueList;
