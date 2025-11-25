import { useCallback, useEffect, useReducer } from 'react';
import { AuthContext } from '~/stores/contexts';
import { ACCESS_TOKEN_KEY_STORAGE } from '~/constants/my_const';
import reducer, { initState } from '~/stores/AuthProvider/reducer';
import { login_action, logout_action, set_loading_action, set_error_action } from './actions';
import { fetchMe, login, logout, refresh, register } from '~/services/authService';

function AuthProvider({ children }) {
  const [{ user, loading, error }, dispatch] = useReducer(reducer, initState);

  // Fetch user data from API
  const handleFetchMe = useCallback(async () => {
    dispatch(set_loading_action(true));
    try {
      const me = await fetchMe();
      dispatch(login_action(me));
    } catch (e) {
      console.error('[Auth Error] Failed to fetch user:', e);
      dispatch(set_error_action(e.message || 'Failed to fetch user data'));
      throw e; // re-throw để caller có thể handle
    } finally {
      dispatch(set_loading_action(false));
    }
  }, []);

  // Handle refresh token
  const handleRefresh = useCallback(async () => {
    dispatch(set_loading_action(true));
    try {
      const accessToken = await refresh();
      localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, accessToken);
    } catch (e) {
      console.error('[Auth Error] Failed to refresh token:', e);
      dispatch(set_error_action(e.message || 'Failed to refresh token'));
    } finally {
      dispatch(set_loading_action(false));
    }
  }, []);

  // Handle registration
  const handleRegister = useCallback(
    async (fullName, username, email, password) => {
      dispatch(set_loading_action(true));
      try {
        const response = await register(fullName, username, email, password);
        localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, response.accessToken);
        await handleFetchMe();
      } catch (e) {
        console.error('[Auth Error] Registration failed:', e);
        dispatch(set_error_action(e.message || 'Registration failed'));
        throw e; // Re-throw for caller to handle
      } finally {
        dispatch(set_loading_action(false));
      }
    },
    [handleFetchMe],
  );

  // Handle login
  const handleLogin = useCallback(
    async (username, password) => {
      dispatch(set_loading_action(true));
      let message;
      try {
        const response = await login(username, password);
        message = response.message;
        localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, response.accessToken);
        await handleFetchMe();
        return message;
      } catch (e) {
        console.error('[Auth Error] Login failed:', e);
        dispatch(set_error_action(e.message || 'Login failed'));
        throw e; // Re-throw for caller to handle
      } finally {
        dispatch(set_loading_action(false));
      }
    },
    [handleFetchMe],
  );

  // Handle logout
  const handleLogout = useCallback(async () => {
    dispatch(set_loading_action(true));
    try {
      await logout();
      dispatch(logout_action());
      localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
    } catch (e) {
      console.error('[Auth Error] Logout failed:', e);
      dispatch(set_error_action(e.message || 'Logout failed'));
    } finally {
      dispatch(set_loading_action(false));
    }
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
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);
      if (token) {
        try {
          dispatch(set_loading_action(true));
          await handleFetchMe();
        } catch (err) {
          console.warn('[Auth Warning] Failed to fetch user on startup:', err);
          localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
          dispatch(logout_action());
          dispatch(set_error_action('Session expired. Please login again.'));
        } finally {
          dispatch(set_loading_action(false));
        }
      }
    };
    checkUser();
  }, [handleFetchMe]);

  useEffect(() => {
    if (error) {
      console.error('[Auth Error]', error);
    }
  }, [error]);

  return (
    <>
      <AuthContext.Provider
        value={{
          user: user,
          loading: loading,
          error: error,
          handleLogin: handleLogin,
          handleLogout: handleLogout,
          handleRegister: handleRegister,
          handleFetchMe: handleFetchMe,
          handleRefresh: handleRefresh,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
