// api endpoints
export const ROOT_URL = 'https://localhost:7068/api/';

export const LOGIN_ENDPOINT = 'auth/login';
export const REGISTER_ENDPOINT = 'auth/register';
export const REFRESH_TOKEN_ENDPOINT = 'auth/refresh-token';
export const LOGOUT_ENDPOINT = 'auth/logout';
export const ME_ENDPOINT = 'users/my-info';
export const GET_USER_LIST_ENDPOINT = 'users/paging';

export const GET_UNFINISHED_EXAMS_ENDPOINT = 'exams/list/unfinished';
export const MARK_AS_FAVOURITE_ENDPOINT = 'exams/mark-as-favourited';
export const UNMARK_AS_FAVOURITE_ENDPOINT = 'exams/unmark-as-favourited';

// actions types
export const SET_USER_TYPE = 'set_user';
export const LOGOUT_TYPE = 'logout';
export const SET_LOADING = 'set_loading';
export const SET_ERROR = 'set_error';

// local storage key
export const USER_KEY_STORAGE = 'USER_CLONEOVERFLOW';
export const ACCESS_TOKEN_KEY_STORAGE = 'ACCESS_TOKEN';

//const
export const APP_NAME = 'Exam Master';
export const APP_SLOGAN = 'Luyện đề - Chinh phục kỳ thi';
