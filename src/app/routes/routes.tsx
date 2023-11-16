import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IndexedObject } from 'types/common';
import SuspenseFallback from '../components/Common/SuspenseFallback/SuspenseFallback';
import Layout, { PropsLayout } from '../components/Layout/Layout';
import { Epath } from './routesConfig';

export type RoutesProps = {
  exact?: boolean;
  path: string;
  component: React.FC<{ history: IndexedObject; location: IndexedObject; match: IndexedObject }>;
  auth?: boolean;
  routes?: Array<RoutesProps>;
  layout?: React.FC<PropsLayout>;
};

const RenderRoutes = ({
  routes,
  isAuthenticated,
}: {
  routes: Array<RoutesProps>;
  isAuthenticated: boolean;
}) => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Switch>
        {routes.map((route, i) => {
          const LayoutRoute = route.layout || Fragment;
          const Component = route.component || <div />;
          if (route.auth && !isAuthenticated) {
            return <Redirect key={i} to={Epath.loginPage} />;
          }
          return (
            <Route
              key={i}
              path={route.path}
              exact={!!route.exact}
              render={(props) => {
                return (
                  <LayoutRoute>
                    {route.routes ? (
                      <RenderRoutes routes={route.routes} isAuthenticated={isAuthenticated} />
                    ) : (
                      <Component {...props} />
                    )}
                  </LayoutRoute>
                );
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export const routes = [
  {
    exact: true,
    path: Epath.notFoundPage,
    layout: Layout,
    component: lazy(() => import('../pages/NotFoundPage/NotFoundPage')),
  },
  {
    exact: true,
    layout: Layout,
    path: Epath.loginPage,
    component: lazy(() => import('../pages/AuthPage/LoginPage/LoginPage')),
  },
  {
    exact: true,
    path: Epath.splash,
    layout: Layout,
    component: lazy(() => import('../pages/Splash/Splash')),
  },

  {
    exact: true,
    path: Epath.register,
    layout: Layout,
    component: lazy(() => import('../pages/AuthPage/Register/Register')),
  },
  {
    path: '*',
    layout: Layout,
    component: () => <Redirect to={Epath.banner} />,
    routes: [
      {
        exact: true,
        path: Epath.banner,
        component: lazy(() => import('../pages/Banner/Banner')),
        auth: false,
      },
      {
        exact: true,
        path: Epath.homePage,
        // layout: Layout,
        component: lazy(() => import('../pages/HomePage/HomePage')),
      },
      {
        exact: true,
        path: Epath.homePageFirst,
        // layout: Layout,
        component: lazy(() => import('../components/Layout/User/HomePageUser/HomePageUser')),
      },
      {
        exact: true,
        path: Epath.homePageSecond,
        component: lazy(() => import('../components/Layout/User/ListCarUser/ListCarUser')),
      },
      {
        exact: true,
        path: Epath.homePageThird,
        component: lazy(() => import('../components/Layout/User/DonateUser/DonateUser')),
      },
      {
        exact: true,
        path: Epath.homePageFour,
        component: lazy(() => import('../components/Layout/User/InfoUser/InfoUser')),
      },
      {
        exact: true,
        path: '*',
        component: () => <Redirect to={Epath.notFoundPage} />,
      },
    ],
  },
];

export default RenderRoutes;
