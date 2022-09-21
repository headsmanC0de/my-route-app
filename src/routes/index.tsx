import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from 'hoc';
import { Layout } from 'layout';
import { AboutPage, BlogPage, HomePage, LoginPage, NotFoundPage } from 'pages';

import { Post } from 'components';

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='blog'
            element={<BlogPage />}
          />
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='blog/:posts/:id'
            element={<Post />}
          />
          <Route
            path='blog/user'
            element={
              <Auth>
                <Post />
              </Auth>
            }
          />
          <Route
            path='about'
            element={<AboutPage />}
          />
          <Route
            path='about-us'
            element={
              <Navigate
                to='about'
                replace
              />
            }
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </>
  );
};
