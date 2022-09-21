import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { IAuthProps } from './Auth.type';

export const Auth: FC<IAuthProps> = ({ children }) => {
  const location = useLocation();
  const authUser = false;

  if (!authUser) {
    return (
      <Navigate
        to='/login'
        state={{ from: location }}
      />
    );
  }

  return <>{children}</>;
};
