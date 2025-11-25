import { LOGOUT_TYPE, SET_USER_TYPE, SET_LOADING, SET_ERROR } from '~/constants/my_const';

const login_action = (payload) => ({ type: SET_USER_TYPE, payload });
const logout_action = () => ({ type: LOGOUT_TYPE });
const set_loading_action = (payload) => ({ type: SET_LOADING, payload });
const set_error_action = (payload) => ({ type: SET_ERROR, payload });

export { login_action, logout_action, set_loading_action, set_error_action };
