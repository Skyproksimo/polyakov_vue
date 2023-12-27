<template>
  <div class="delivery-page">
    <div class="delivery-box">
      <h2>Оформление доставки</h2>
      <div class="form-group">
        <label for="phone">Телефон:</label>
        <input type="text" id="phone" v-model="phone">
      </div>
      <div class="form-group">
        <label for="address">Адрес доставки:</label>
        <input type="text" id="address" v-model="address">
      </div>
      <button @click="submitDelivery">Оформить доставку</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Delivery',
  components: {
    Footer
  }
}
</script>

<style lang="scss">

.delivery-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: beige;
}

.delivery-box {
  width: 60%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>