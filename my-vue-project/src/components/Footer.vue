<template>
  <!-- Открываем тег шаблона -->
  <footer>
    <div class="contact-info">
      <!-- Контактная информация -->
      Телефон: +7 (932)-456-7890 | Адрес: г. Москва ул. Примерная, 11
    </div>
    <div class="social-icons">
      <!-- Иконки соцсетей с обработчиками кликов -->
      <a href="#" @click="showUnderDevelopmentMessage('Instagram')">
        <img src="@/assets/instagram-icon.png" alt="Instagram">
      </a>
      <a href="#" @click="showUnderDevelopmentMessage('VK')">
        <img src="@/assets/vk-icon.png" alt="VK">
      </a>
      <a href="#" @click="showUnderDevelopmentMessage('YouTube')">
        <img src="@/assets/youtube-icon.png" alt="YouTube">
      </a>
    </div>
    <!-- Отображение сообщения о том, что соцсети находятся в разработке -->
    <div v-if="showMessage" class="development-message">
      <p>Социальная сеть "{{ selectedSocialNetwork }}" находится в разработке.</p>
    </div>
  </footer>
  <!-- Закрываем футер -->
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showMessage: false,
      selectedSocialNetwork: ''
    };
  },
  methods: {
    // Метод для отображения сообщения о разработке
    showUnderDevelopmentMessage(network) {
      this.showMessage = true; // Показываем сообщение о разработке
      this.selectedSocialNetwork = network; // Устанавливаем выбранную соцсеть
      // Через некоторое время скрываем сообщение
      setTimeout(() => {
        this.showMessage = false;
        this.selectedSocialNetwork = '';
      }, 3000); // 3000 миллисекунд = 3 секунды
    }
  }
};
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

.development-message {
  margin-top: 10px; /* Отступ сверху для сообщения */
  text-align: center; /* Выравнивание текста по центру */
  color: red; /* Цвет текста красный */
  font-weight: bold; /* Жирное начертание текста */
}
</style>
<!-- Закрываем стили -->