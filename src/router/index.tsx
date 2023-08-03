import { lazy } from 'react';
import AuthRouter from './AuthRouter';
import { Navigate, useRoutes } from 'react-router-dom';
const Page404 = lazy(() => import('@/pages/404'));
const Home = lazy(() => import('@/pages/Home'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const About = lazy(() => import('@/pages/About'));

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
  auth?: boolean;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
    auth: false,
  },
  {
    path: '/home',
    element: <Home />,
    auth: true,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    auth: true,
  },
  {
    path: '/about',
    element: <About />,
    auth: true,
  },
  {
    path: '*',
    element: <Page404 />,
    auth: false,
  },
];
const RouterTransformer = (routes: RouteConfig[]) => {
  const transformedRouters: RouteConfig[] = [];
  routes.forEach((route) => {
    const routeBbj = { ...route };
    routeBbj.element = (
      <AuthRouter auth={route.auth}>{route.element}</AuthRouter>
    );
    if (route.children) {
      RouterTransformer(route.children);
    }
    transformedRouters.push(routeBbj);
  });
  return transformedRouters;
};

const Routes = () => useRoutes(RouterTransformer(routes));
export default Routes;
