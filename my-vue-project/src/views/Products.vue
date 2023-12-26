<template>
  <div class="products">
    <h1>Товары</h1>
    <div class="product-grid">
      <!-- Прямоугольник 1 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
            <img src="@/assets/Булочка_с_корицей.jpg" alt="Название товара 1">
            </div>
              <div class="product-description">
                <h3>Булочка с корицей</h3>
              <p>Описание товара 1</p>
            <p>Цена за штуку 1</p>
        </div>
        </div>
      </div>

      <!-- Продолжайте для других товаров -->
      <!-- Прямоугольник 2 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
          <img src="@/assets/булочки_с_изюмом.jpg" alt="Название товара 2">
        </div>
        <div class="product-description">
          <h3>отшмтгцмтгцтгцут</h3>
          <p>Описание товара 2</p>
          <p>Цена за штуку 2</p>
        </div>
      </div>
      </div>

      <!-- Продолжайте аналогично для остальных товаров -->
      <!-- Прямоугольник 3 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
          <img src="@/assets/заварные_булочки.jpg" alt="Название товара 3">
        </div>
        <div class="product-description">
          <h3>Название товара 3</h3>
          <p>Описание товара 3</p>
          <p>Цена за штуку 3</p>
        </div>
      </div>
      </div>

      <!-- Продолжайте аналогично для остальных товаров -->
      <!-- Прямоугольник 4 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
          <img src="@/assets/булочки_с_лимоном.webp" alt="Название товара 4">
        </div>
        <div class="product-description">
          <h3>Название товара 4</h3>
          <p>Описание товара 4</p>
          <p>Цена за штуку 4</p>
        </div>
      </div>
    </div>

      <!-- Продолжайте аналогично для остальных товаров -->
      <!-- Прямоугольник 5 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
          <img src="@/assets/булочки_с_маком.webp" alt="Название товара 5">
        </div>
        <div class="product-description">
          <h3>Название товара 5</h3>
          <p>Описание товара 5</p>
          <p>Цена за штуку 5</p>
        </div>
      </div>
      </div>

      <!-- Продолжайте аналогично для остальных товаров -->
      <!-- Прямоугольник 6 -->
      <div class="product">
        <div class = "product-content">
        <div class="product-image">
          <img src="@/assets/булочки_с_повидлом.webp" alt="Название товара 6">
        </div>
        <div class="product-description">
          <h3>Название товара 6</h3>
          <p>Описание товара 6</p>
          <p>Цена за штуку 6</p>
        </div>
      </div>
    </div>
    </div>
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
  align-items: center;
  padding: 20px;
}

/* Стили для сетки товаров */
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin-top: 20px;
}

.product {
  width: calc(50% - 10px);
  height: 250px;
  border-radius: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  margin-right: 100px;
  margin-top: 40px;
  /* Стили для картинки товара */
}

.product-description {
  display: flex; 
  flex-direction: column;
  justify-content: center;
}
.product-content {
  display: flex;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .product {
    width: 100%;
  }
}
</style>