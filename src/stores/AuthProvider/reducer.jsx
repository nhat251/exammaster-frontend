import { SET_USER_TYPE, LOGOUT_TYPE, SET_LOADING } from '~/constants/my_const';

const initState = { user: null, loading: false };

function reducer(state, action) {
  switch (action.type) {
    case SET_USER_TYPE:
      return { ...state, user: action.payload };

    case LOGOUT_TYPE:
      return { ...state, user: null };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}

export default reducer;
export { initState };
