import { createRouter, createWebHistory } from 'vue-router';

// Импорт всех компонентов, которые будут использоваться в маршрутах
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Delivery from './views/Delivery.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  // Другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;