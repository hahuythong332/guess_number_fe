import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Register from '@/views/RegisterView.vue';
import Home from '@/views/HomeView.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  // If logged in and trying to go to login or register → redirect to home
  if (token && (to.name === 'login' || to.name === 'register')) {
    return next({ name: 'home' });
  }

  if (!token && !(to.name === 'login' || to.name === 'register')) {
    return next({ name: 'login' });
  }

  // Otherwise, allow navigation
  next();
});

export default router;