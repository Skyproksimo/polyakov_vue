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
              <p>Насладитесь неповторимым ароматом и вкусом наших булочек с корицей. Нежное тесто, пропитанное ароматными специями и обволакивающее сладкое начинку – настоящий праздник для ваших вкусовых рецепторов.</p>
            <p class="chena">Цена за штуку 105р.</p>
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
          <h3>Булочка с изюмом</h3>
          <p>Насладитесь нашим волшебным творением — пышная булочка, торжественно насыщенная сочными изюминками.Подарите себе частичку удовольствия и насладитесь неповторимым вкусом булочки, которая словно окутывает теплом и комфортом.</p>
          <p class="chena">Цена за штуку 130р.</p>
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
          <h3>Заварная булочка</h3>
          <p>Нежные, воздушные и легкие - наши заварные булочки представляют собой настоящий деликатес. Сочетание мягкости и неповторимого вкуса с нежным ароматом сладких теста погрузит вас в истинное наслаждение.</p>
          <p class="chena">Цена за штуку 110р.</p>
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
          <h3>Булочка с лимоном</h3>
          <p>Сочетание свежести лимона и нежного теста наших булочек создает настоящий взрыв яркого вкуса. Утонченный аромат лимона в сочетании с легким и воздушным тестом сделает ваше утро волшебным, ведь каждая булочка готовиться с частичкой волшебства.</p>
          <p class="chena">Цена за штуку 99р.</p>
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
          <h3>Булочка с маком</h3>
          <p>Наши булочки с маком представляют собой идеальное сочетание хрустящего теста и нежного вкуса маковых зерен. Изысканный аромат и тонкий вкус мака придают этим булочкам особый шарм, превращая их в великолепное угощение для вашего вкуса.</p>
          <p class="chena">Цена за штуку 115р.</p>
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
          <h3>Булочка с повидлом</h3>
          <p>Наши булочки с повидлом - это искусно испеченные деликатесы, которые уносят вас в мир теплых воспоминаний. Изысканный вкус нежного теста с ароматным повидлом, создает неотразимое впечатление. Погрузитесь в неповторимый вкус домашнего угощения!</p>
          <p class="chena">Цена за штуку 130р.</p>
        </div>
      </div>
    </div>
    </div>
    <div class = "empty-spase"> </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Products',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:  80px;
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

.empty-spase{
  height: 100px;
}

.chena{
  font-style: italic;
  font-weight: 1000;
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

.product-image img {
  margin-right: 100px;
  margin-top: 40px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.4) ;
  /* Стили для картинки товара */
}

.product-description {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  line-height: 25px ;
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