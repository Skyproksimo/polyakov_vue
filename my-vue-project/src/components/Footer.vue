<template>
    <footer>
      <div class="contact-info">
        <!-- Контактная информация -->
        Телефон: +7 (932)-456-7890 | Адрес: г. Москва ул. Примерная, 11
      </div>
      <div class="social-icons">
        <!-- Иконки соцсетей -->
        <a href="#"><img src="@/assets/instagram-icon.png" alt="Instagram"></a>
        <a href="#"><img src="@/assets/vk-icon.png" alt="VK"></a>
        <a href="#"><img src="@/assets/youtube-icon.png" alt="YouTube"></a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  footer {
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
  }
  
  .contact-info {
    margin-left: 10px; /* Отступ слева для контактной информации */
    color: #fff;
  }
  
  .social-icons {
    display: flex;
  }
  
  .social-icons a {
    margin-right: 10px; /* Отступ между иконками соцсетей */
    color: #fff;
    height: 30px;
    width: 30p;
  }
  </style>