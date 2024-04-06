/* eslint-disable import/no-unresolved */
import { lazy, Suspense, useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from 'src/auth/authLayout';
import WebsitePage from 'src/pages/website';
import DashboardLayout from 'src/layouts/dashboard';
import { UserContext } from 'src/context/user.context';
import WebsiteProductsPage from 'src/pages/website/products';

import WebsiteLayout from '../layouts/website/index';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
// eslint-disable-next-line import/no-unresolved
export const Page404 = lazy(() => import('src/pages/page-not-found'));
import { Outlet }  from 'react-router-dom';

// ----------------------------------------------------------------------

export default function Router() {
  const { login } = useContext(UserContext);
  const routes = useRoutes([
    {
      path: '/admin',
      element: (
        <DashboardLayout>
          <Suspense>
            <AuthLayout authenticated={login} />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/',
      element: (
        <WebsiteLayout>
          <Suspense>
          <Outlet/>
          </Suspense>
        </WebsiteLayout>
      ),
      children: [
        { element: <WebsitePage />, index: true },
        { path: 'products', element: <WebsiteProductsPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
