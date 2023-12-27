// Импорт функций для создания маршрутизатора и использования истории веба
import { createRouter, createWebHistory } from 'vue-router';

// Импорт компонентов для маршрутов
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Delivery from './views/Delivery.vue';

// Массив маршрутов, каждый маршрут содержит путь, имя и соответствующий компонент Vue
const routes = [
  {
    path: '/', // Путь URL
    name: 'Home', // Имя маршрута
    component: Home // Компонент, связанный с этим маршрутом
  },
  {
    path: '/products', // Путь URL
    name: 'Products', // Имя маршрута
    component: Products // Компонент, связанный с этим маршрутом
  },
  {
    path: '/delivery', // Путь URL
    name: 'Delivery', // Имя маршрута
    component: Delivery // Компонент, связанный с этим маршрутом
  }
];

// Создание экземпляра маршрутизатора с использованием истории веба и определенных маршрутов
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Экспорт созданного маршрутизатора для использования в приложении
export default router;