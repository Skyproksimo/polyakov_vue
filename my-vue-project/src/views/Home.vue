<template>
  <div class="home">
    <div class="gallery-container">
      <button class="arrow-button" @click="prevImage">&lt;</button> <!-- Кнопка "назад" -->
      <img :src="currentImage" alt="Image" class="gallery-image" /> <!-- Элемент img для отображения изображения -->
      <button class="arrow-button" @click="nextImage">&gt;</button> <!-- Кнопка "вперед" -->
      <div class="text-container">
        <p>
          Мы рады, что вы решили посмотреть галерею наших фотографий. Оставьте свой номер телефона и наши операторы свяжутся с вами.
        </p>
        <input v-model="phoneNumber" type="text" placeholder="Расскажите про вашу любимую булочку и мы обязательно ее сделаем" />
        <button class = "sending-button" @click="sendData">Отправить</button>
      </div>
    </div>
    <Footer />
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
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
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
.home {
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.gallery-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* Ширина контейнера для галереи */
  margin-bottom: 20px;
}

.arrow-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.gallery-image {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.text-container {
  text-align: center;
  margin: 10px;
}

.sending-button{
  margin: 10px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
}
input[type="text"] {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>