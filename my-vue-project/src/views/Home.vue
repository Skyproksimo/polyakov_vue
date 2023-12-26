<template>
  <div class="home">
    <h1>Добро пожаловать на сайт доставки булочек и выпечки!</h1>
    <p>Мы рады предложить вам лучшие вкусности прямо к вашей двери.</p>
    <Footer />
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'; // Импорт компонента Footer

export default {
  name: 'Home',
  components: {
    Footer // Регистрация компонента Footer
  }
}
</script>

<style lang="scss">
.home {
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh; /* Высота блока равная высоте экрана */
  text-align: center;
  margin-top: 15vh; /* Отступ сверху на 30% от высоты экрана */
}
</style>