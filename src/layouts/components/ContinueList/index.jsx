import classNames from 'classnames/bind';
import styles from './ContinueList.module.scss';

import { useCallback, useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

import { fetchUnFinishedExams, unMarkAsFavourite, markAsFavourite } from '~/services/examService';
import { useAuth } from '~/hooks';
import ContinueItem from './ContinueItem';

const cx = classNames.bind(styles);

function ContinueList({ title }) {
  const [unfinishExamPageResult, setUnfinishExamPageResult] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error' | 'warning' | 'info'
  });
  const { user } = useAuth();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const toggleMarkFavourite = useCallback(async (attemp) => {
    try {
      let message;
      if (attemp.isFavourite) {
        message = await unMarkAsFavourite(attemp.examId);
      } else {
        message = await markAsFavourite(attemp.examId);
      }

      attemp.isFavourite = !attemp.isFavourite;

      setUnfinishExamPageResult((prevState) => prevState.map((at) => (at.attempId === attemp.attempId ? attemp : at)));

      setSnackbar({
        open: true,
        message: message || (attemp.isFavourite ? 'Đã thêm vào yêu thích' : 'Đã xóa khỏi yêu thích'),
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Có lỗi xảy ra. Vui lòng thử lại!',
        severity: 'error',
      });
    }
  }, []);

  useEffect(() => {
    const initHomePage = async () => {
      if (!user) {
        setUnfinishExamPageResult([]);
        return;
      }
      const unfinishexam = await fetchUnFinishedExams({ page: 1, size: 3 });
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
            return <ContinueItem key={attemp.id} attemp={attemp} toggleMarkFavourite={toggleMarkFavourite} />;
          })}
        </div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          sx={{ zIndex: 20000 }}
        >
          <Alert
            variant="filled"
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{
              width: '260px',
              fontWeight: 600,
              borderRadius: '10px',
              boxShadow: 4,
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }

  return render;
}

export default ContinueList;
