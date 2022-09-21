import { useLocation, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from.pathname || '/';

  return (
    <div>
      <h1>LoginPage</h1>
      <h4>{fromPage}</h4>
    </div>
  );
};
