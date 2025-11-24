import { useCallback, useEffect, useReducer } from 'react';
import { AuthContext } from '~/stores/contexts';
import { ACCESS_TOKEN_KEY_STORAGE } from '~/constants/my_const';
import reducer, { initState } from '~/stores/AuthProvider/reducer';
import { login_action, logout_action, set_loading_action } from './actions';
import { fetchMe, login, logout, register } from '~/services/authService';

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);
      if (token) {
        try {
          dispatch(set_loading_action(true));
          const me = await fetchMe();
          dispatch(login_action(me));
        } catch (err) {
          console.warn('Fetch /me failed, maybe token expired:', err);
          localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
          dispatch(logout_action());
        } finally {
          dispatch(set_loading_action(false));
        }
      }
    };
    checkUser();
  }, []);

  const handleRegister = useCallback(async (fullName, username, email, password) => {
    dispatch(set_loading_action(true));

    const response = await register(fullName, username, email, password);
    localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, response.accessToken);
    const me = await fetchMe();
    dispatch(login_action(me));

    dispatch(set_loading_action(false));
  }, []);

  const handleLogin = useCallback(async (username, password) => {
    dispatch(set_loading_action(true));

    const response = await login(username, password);
    localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, response.accessToken);
    const me = await fetchMe();
    dispatch(login_action(me));

    dispatch(set_loading_action(false));
    return response.message;
  }, []);

  const handleLogout = useCallback(async () => {
    dispatch(set_loading_action(true));
    logout();
    dispatch(logout_action());
    localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
    dispatch(set_loading_action(false));
  }, []);

  useEffect(() => {
    const onLogout = () => {
      dispatch(set_loading_action(true));
      dispatch(logout_action());
      dispatch(set_loading_action(false));
    };

    window.addEventListener('auth:logout', onLogout);

    return () => {
      window.removeEventListener('auth:logout', onLogout);
    };
  }, [handleLogout]);

  return (
    <>
      <AuthContext.Provider
        value={{ user: state.user, login: handleLogin, logout: handleLogout, register: handleRegister }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
