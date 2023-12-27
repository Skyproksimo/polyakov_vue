<template>
  <!-- Открываем тег шаблона -->
  <div class="delivery-page">
    <!-- Обертка для страницы доставки -->
    <div class="delivery-box">
      <!-- Контейнер блока оформления доставки -->
      <h2>Оформление доставки</h2>
      <!-- Заголовок блока оформления доставки -->
      <div class="form-group">
        <!-- Группа элементов формы -->
        <label for="phone">Телефон:</label>
        <!-- Подпись для поля ввода телефона -->
        <input type="text" id="phone" v-model="phone">
        <!-- Поле ввода для телефона, связанное с данными -->
      </div>
      <div class="form-group">
        <!-- Группа элементов формы -->
        <label for="address">Адрес доставки:</label>
        <!-- Подпись для поля ввода адреса доставки -->
        <input type="text" id="address" v-model="address">
        <!-- Поле ввода для адреса доставки, связанное с данными -->
      </div>
      <button @click="submitDelivery">Оформить доставку</button>
      <!-- Кнопка для оформления доставки -->
      <div v-if="developmentMessage" class="development-alert">
        <!-- Уведомление о разработке, отображаемое при нажатии на кнопку -->
        Функция находится в разработке
      </div>
    </div>
    <Footer />
    <!-- Компонент футера, отображаемый внизу страницы -->
  </div>
  <!-- Закрываем тег страницы доставки -->
</template>


<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Delivery', // Название компонента доставки
  components: {
    Footer // Регистрация компонента футера
  },
  data() {
    return {
      phone: '', // Переменная для хранения номера телефона
      address: '', // Переменная для хранения адреса доставки
      developmentMessage: false // Переменная для уведомления о разработке
    };
  },
  methods: {
    submitDelivery() {
      // Метод, вызываемый при нажатии на кнопку "Оформить доставку"
      this.developmentMessage = true; // Устанавливаем уведомление о разработке
      setTimeout(() => {
        // Через определенное время скрываем уведомление
        this.developmentMessage = false;
      }, 3000); // Скрываем уведомление через 3 секунды
    }
  }
}
</script>

<style lang="scss">
/* Открываем стили с SCSS */
.delivery-page {
  /* Стили для страницы доставки */
  display: flex; /* Отображение элементов в строку */
  justify-content: center; /* Выравнивание по центру по горизонтали */
  align-items: center; /* Выравнивание по центру по вертикали */
  height: 100vh; /* Высота равная высоте экрана */
  background-color: beige; /* Цвет фона страницы */
}

.delivery-box {
  /* Стили для блока оформления доставки */
  width: 60%; /* Ширина блока */
  padding: 20px; /* Отступы внутри блока */
  background-color: white; /* Цвет фона блока */
  border-radius: 10px; /* Радиус скругления углов */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Тень блока */
  text-align: center; /* Выравнивание содержимого по центру */
}

.form-group {
  /* Стили для группы элементов формы */
  margin-bottom: 15px; /* Отступ снизу */
}

.development-alert {
  /* Стили для уведомления о разработке */
  margin-top: 20px; /* Отступ сверху */
  padding: 10px; /* Отступы внутутри блока уведомления */
background-color: #ff9800; /* Цвет фона уведомления */
color: white; /* Цвет текста уведомления */
border-radius: 5px; /* Радиус скругления углов */
text-align: center; /* Выравнивание текста по центру */
}
input {
/* Стили для полей ввода */
width: 100%; /* Ширина поля ввода */
padding: 8px; /* Отступы внутри поля ввода */
border: 1px solid #ccc; /* Граница поля ввода */
border-radius: 5px; /* Радиус скругления углов */
box-sizing: border-box; /* Размеры поля ввода с учетом границ */
}
button {
/* Стили для кнопки */
padding: 10px 20px; /* Отступы внутри кнопки */
background-color: #007bff; /* Цвет фона кнопки */
color: white; /* Цвет текста кнопки */
border: none; /* Убираем границу у кнопки */
border-radius: 5px; /* Радиус скругления углов */
cursor: pointer; /* Изменяем вид курсора при наведении */
}
</style>