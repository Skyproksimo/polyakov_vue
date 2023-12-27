<template>
  <!-- Открываем тег шаблона -->
  <footer>
    <!-- Начало футера -->
    <div class="contact-info">
      <!-- Контактная информация -->
      Телефон: +7 (932)-456-7890 | Адрес: г. Москва ул. Примерная, 11
    </div>
    <!-- Закрываем контактную информацию -->
    <div class="social-icons">
      <!-- Иконки соцсетей -->
      <a href="#"><img src="@/assets/instagram-icon.png" alt="Instagram"></a>
      <a href="#"><img src="@/assets/vk-icon.png" alt="VK"></a>
      <a href="#"><img src="@/assets/youtube-icon.png" alt="YouTube"></a>
    </div>
    <!-- Закрываем блок иконок соцсетей -->
  </footer>
  <!-- Закрываем футер -->
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
/* Открываем стили с SCSS */
footer {
  /* Стили для футера */
  width: 100%;
  height: 10vh;
  background-color: #333;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  /* Фиксированное положение футера внизу страницы */
}

.contact-info {
  /* Стили для блока контактной информации */
  margin-left: 10px; /* Отступ слева для контактной информации */
  color: #fff; /* Цвет текста белый */
}

.social-icons {
  /* Стили для блока соцсетей */
  display: flex; /* Отображение иконок соцсетей в строку */
}

.social-icons a {
  /* Стили для ссылок с иконками */
  margin-right: 10px; /* Отступ между иконками соцсетей */
  color: #fff; /* Цвет текста белый */
  height: 30px; /* Высота иконок 30 пикселей */
  width: 30p; /* Ошибка: Здесь должно быть 30px для ширины */
}
</style>
<!-- Закрываем стили -->