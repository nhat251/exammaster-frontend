import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY_STORAGE } from '~/constants/my_const';
import { useAuth } from '~/hooks';

function ProtectedRoute() {
  const { user, loading, handleFetchMe } = useAuth();
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const init = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);

      if (!user && accessToken) {
        await handleFetchMe();
      }

      setFirstRender(false);
    };

    init();
  }, []);

  if (firstRender || loading) {
    return <>DANG TAI...</>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
