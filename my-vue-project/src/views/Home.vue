<template>
  <!-- Открываем тег шаблона -->
  <div class="home">
    <!-- Блок для домашней страницы -->
    <div class="gallery-container">
      <!-- Контейнер для галереи изображений -->
      <button class="arrow-button" v-on:click="prevImage">&lt;</button> <!-- Кнопка "назад" -->
      <img :src="currentImage" alt="Image" class="gallery-image" /> <!-- Элемент img для отображения изображения -->
      <button class="arrow-button" v-on:click="nextImage">&gt;</button> <!-- Кнопка "вперед" -->
      <div class="text-container">
        <!-- Блок для текстового контента -->
        <p>
          Мы надеемся что наш сайт вам очень понравился и вы сможете найти для себя ту самую булочку. Однако если вы ее не нашли, пожалуйста опишите что за булочку вы хотите.
        </p>
        <input v-model="phoneNumber" type="text" placeholder="Расскажите про вашу любимую булочку и мы обязательно ее сделаем" />
        <!-- Поле ввода для номера телефона -->
        <button class="sending-button" v-on:click="sendData">Отправить</button>
        <!-- Кнопка "Отправить" -->
      </div>
    </div>
    <Footer /> <!-- Компонент футера -->
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer
  },
  data() {
    return {
      images: [
        require('@/assets/карусель_1.jpg'), // Путь к вашему изображению
        require('@/assets/карусель_2.jpg'), // Путь к вашему изображению
        require('@/assets/карусель_3.jpg') // Путь к вашему изображению
        // Добавьте пути к вашим изображениям
      ],
      currentImageIndex: 0,
      phoneNumber: ''
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    // Методы для навигации по изображениям
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    // Метод для отправки данных
    sendData() {
      // Логика отправки данных
      console.log('Phone Number:', this.phoneNumber);
      // Очистить поле ввода после отправки
      this.phoneNumber = '';
    }
  }
}
</script>

<style lang="scss">
/* Стили для домашней страницы */
.home {
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}


/* Стили для контейнера галереи */
.gallery-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* Ширина контейнера для галереи */
  margin-bottom: 20px;
}

/* Стили для кнопок переключения изображений */
.arrow-button {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
}

/* Стили для изображения в галерее */
.gallery-image {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Стили для текстового контейнера */
.text-container {
  text-align: center;
  margin: 10px;
}

/* Стили для кнопки отправки данных */
.sending-button {
  margin: 10px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
}

/* Стили для поля ввода текста */
input {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>