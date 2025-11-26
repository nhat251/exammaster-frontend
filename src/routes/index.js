import { HeaderOnlyLayout } from '~/layouts';
import { Home, Login, MyLearning, Register } from '~/pages';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/contribute', component: Home, layout: HeaderOnlyLayout },
  { path: '/contact', component: Home },
  { path: '/exams', component: Home },
];

const privateRoutes = [
  { path: '/my-learning', component: MyLearning },
  { path: '/wallet', component: Home },
];

export { publicRoutes, privateRoutes };
