import { Outlet } from 'react-router-dom';

import { CustomLink } from 'components/UI';

export const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/blog'>blog</CustomLink>
        <CustomLink to='/about'>about</CustomLink>
      </header>

      <Outlet />

      <footer>Router dom v6</footer>
    </>
  );
};
