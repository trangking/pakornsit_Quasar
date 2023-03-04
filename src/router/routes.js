import MyLayout from 'pages/MyLayout.vue';
import MyForm1 from 'pages/MyForm1.vue';
import MyFirst from 'pages/MyFirst';
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  {
    path: '/MyLayout',
    component: MyLayout
  },
  {
    path: '/MyForm1',
    component: MyForm1
  },
  {
    path: '/MyFirst',
    component: MyFirst
  }
]

export default routes
