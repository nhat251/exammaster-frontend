import callApi from '~/api/axiosConfig';
import { GET_TOP_USER_ENDPOINT } from '~/constants/my_const';

export const fetchListUserByPoints = async (page = 1, size = 3) => {
  return await callApi({ path: GET_TOP_USER_ENDPOINT, params: { page: page, size: size } }).then((res) => res.result);
};
