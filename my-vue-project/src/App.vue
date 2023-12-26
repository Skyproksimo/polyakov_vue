<template>
    <div id="app">
      <!-- Подключаем компонент Header.vue -->
      <Header /> <!-- Убедитесь, что здесь правильно указан компонент Header.vue -->
      
      <!-- Остальное содержимое вашего приложения, например, router-view -->
      <router-view />
    </div>
  </template>
  
  <script>
  // Импортируем компонент Header.vue
  import Header from './components/Header.vue';
  
  export default {
    name: 'App',
    components: {
      Header // Регистрируем компонент Header.vue
    }
  }
  </script>
  
  <style lang="scss">
  *{
    margin: 0;
  }
  body{
    background-color: #9E8544;
  }
  </style>