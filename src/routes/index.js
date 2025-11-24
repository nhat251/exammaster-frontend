import { HeaderOnlyLayout } from '~/layouts';
import { Home } from '~/pages';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/my-learning', component: Home },
  { path: '/contribute', component: Home, layout: HeaderOnlyLayout },
  { path: '/contact', component: Home },
  { path: '/wallet', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
