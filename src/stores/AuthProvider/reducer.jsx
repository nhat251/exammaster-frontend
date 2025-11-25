import { SET_USER_TYPE, LOGOUT_TYPE, SET_LOADING, SET_ERROR } from '~/constants/my_const';

const initState = { user: null, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case SET_USER_TYPE:
      return { ...state, user: action.payload, error: null };

    case LOGOUT_TYPE:
      return { ...state, user: null, error: null };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default reducer;
export { initState };
