export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {
        path: '',
        redirect: 'dashboard',
      },
      {
        path: 'dashboard',
        component: () => import('pages/dashboard'),
      },
      {
        path: 'devices/:id',
        component: () => import('pages/devices/Device'),
      },
    ],
  },

  {
    path: '*',
    component: () => import('pages/404'),
  },
];
