import { MainRoutes } from '@/routes/MainRoutes';
import { useRoutes } from 'react-router-dom';

function Routes() {
  return useRoutes([MainRoutes]);
}

export default Routes;
