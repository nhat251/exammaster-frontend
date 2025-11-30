import callApi from '~/api/axiosConfig';
import {
  GET_COLLECTIONS_ENDPOIND,
  GET_UNFINISHED_EXAMS_ENDPOINT,
  MARK_AS_FAVOURITE_ENDPOINT,
  UNMARK_AS_FAVOURITE_ENDPOINT,
} from '~/constants/my_const';

export const fetchUnFinishedExams = async ({ page = 1, size = 3 }) => {
  let examlist = await callApi({ path: GET_UNFINISHED_EXAMS_ENDPOINT, params: { page, size } }).then(
    (res) => res.result,
  );
  return examlist;
};

export const markAsFavourite = async (examId) => {
  return await callApi({ path: MARK_AS_FAVOURITE_ENDPOINT, method: 'POST', params: { examId } }).then(
    (res) => res.result,
  );
};

export const unMarkAsFavourite = async (examId) => {
  return await callApi({ path: UNMARK_AS_FAVOURITE_ENDPOINT, method: 'DELETE', params: { examId } }).then(
    (res) => res.result,
  );
};

export const getListCollections = async (page = 1, size = 3) => {
  return await callApi({ path: GET_COLLECTIONS_ENDPOIND, params: { page, size } }).then((res) => res.result);
};
