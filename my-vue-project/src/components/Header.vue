<template>
  <header class="header">
    <nav class="menu">
      <router-link to="/" class="menu-link">Главная</router-link>
      <router-link to="/products" class="menu-link">Товары</router-link>
      <router-link to="/delivery" class="menu-link">Доставка</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 10vh; /* Изменение высоты меню до 6% высоты экрана */
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed; /* Фиксированное позиционирование для размещения в верхней части экрана */
  top: 0; /* Прикрепление к верхней части экрана */
  z-index: 999; /* Поднятие меню над остальным содержимым */

  .menu {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;

    .menu-link {
      margin-right: 1rem;
      color: #fff;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>