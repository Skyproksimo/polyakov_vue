<template>
  <div class="products">
    <h1>Товары</h1>
    <p>Текст о ваших товарах или ассортименте...</p>
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style lang="scss">
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  text-align: center;
  margin-top: 15vh;
}
</style>