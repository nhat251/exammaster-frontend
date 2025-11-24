import { LOGIN_ENDPOINT, ME_ENDPOINT, LOGOUT_ENDPOINT, REGISTER_ENDPOINT } from '~/constants/my_const';
import callApi from '~/api/axiosConfig';

const register = async (fullName, username, email, password) => {
  return await callApi({ path: REGISTER_ENDPOINT, method: 'POST', data: { fullName, username, email, password } }).then(
    (res) => res.result,
  );
};

const login = async (username, password) => {
  return await callApi({ path: LOGIN_ENDPOINT, method: 'POST', data: { username, password } }).then(
    (res) => res.result,
  );
};

const fetchMe = async () => {
  return await callApi({ path: ME_ENDPOINT }).then((res) => res.result);
};

const logout = async () => {
  await callApi({ path: LOGOUT_ENDPOINT, method: 'POST' });
};

export { register, login, fetchMe, logout };
