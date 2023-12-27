<template>
  <header class="header">
    <!-- Открываем тег шапки -->
    <nav class="menu">
      <!-- Навигационное меню с использованием router-link -->
      <router-link to="/" class="menu-link">Главная</router-link>
      <router-link to="/products" class="menu-link">Товары</router-link>
      <router-link to="/delivery" class="menu-link">Доставка</router-link>
    </nav>
  </header>
  <!-- Закрываем тег шапки -->
</template>

<script>
export default {
  name: 'Header' // Название компонента шапки
}
</script>

<style lang="scss">
/* Открываем стили с SCSS */
.header {
  /* Стили для шапки */
  width: 100%;
  height: 10vh; /* Изменение высоты меню до 10% высоты экрана */
  background-color: #333; /* Цвет фона шапки */
  display: flex;
  justify-content: space-around; /* Равномерное распределение элементов */
  align-items: center; /* Выравнивание элементов по центру */
  position: fixed; /* Фиксированное позиционирование для размещения в верхней части экрана */
  top: 0; /* Прикрепление к верхней части экрана */
  z-index: 999; /* Поднятие меню над остальным содержимым */

  .menu {
    /* Стили для меню */
    display: flex; /* Отображение элементов меню в строку */
    align-items: center; /* Выравнивание элементов по центру */
    color: #fff; /* Цвет текста белый */
    font-size: 1.2rem; /* Размер текста меню */

    .menu-link {
      /* Стили для ссылок меню */
      margin-right: 1rem; /* Отступ справа между ссылками */
      color: #fff; /* Цвет текста белый */
      text-decoration: none; /* Отключение подчеркивания ссылок */
      cursor: pointer; /* Изменение курсора при наведении на ссылки */

      &:hover {
        /* Стили для состояния наведения на ссылки */
        text-decoration: underline; /* Подчеркивание текста при наведении */
      }
    }
  }
}
</style>
<!-- Закрываем стили -->