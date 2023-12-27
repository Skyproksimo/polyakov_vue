// Импортируем функцию createApp из библиотеки Vue
import { createApp } from 'vue';

// Импортируем корневой компонент приложения (App.vue)
import App from './App.vue';

// Импортируем настройки маршрутизации
import router from './router'; 

// Создаем экземпляр приложения Vue
const app = createApp(App);

// Используем маршрутизацию внутри приложения Vue
app.use(router); 

// Монтируем корневой компонент приложения на элемент с идентификатором "app"
app.mount('#app');