import { Navigate } from 'react-router-dom';

import { MAIN_ROUTES } from '../constants/routes';
import Layout from '../layout/Layout';
import Benefit from '../pages/Benefit/Benefit';
import Card from '../pages/Card/Card';
import Culture from '../pages/Culture/Culture';
import Home from '../pages/Home/Home';

export const MainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Navigate replace to={MAIN_ROUTES.HOME.path} />,
    },
    {
      path: MAIN_ROUTES.HOME.path,
      element: <Home />,
    },
    {
      path: MAIN_ROUTES.CULTURE.path,
      element: <Culture />,
    },
    {
      path: MAIN_ROUTES.CARD.path,
      element: <Card />,
    },
    {
      path: MAIN_ROUTES.BENEFIT.path,
      element: <Benefit />,
    },
  ],
};
