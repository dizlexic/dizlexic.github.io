export const routes = [
  {
    path: '/',
    component: () => import('./pages/Home.vue'),
    name: 'Home',
  },
  {
    path: '/blog',
    component: () => import('./pages/Blog.vue'),
    name: 'Blog',
  },
  {
    path: '/projects',
    component: () => import('./pages/Projects.vue'),
    name: 'Projects',
  },
  {
    path: '/blog/:slug',
    component: () => import('./pages/Post.vue'),
    props: true,
  },
  {
    path: '/projects/:slug',
    component: () => import('./pages/Project.vue'),
    props: true,
  },
]
