<template>
  <div class="app">
    <main>
      <SearchInput
        v-model="inputText"
        @search="filterItemsBySearchText"
      ></SearchInput>
      <ul>
        <li
          v-for="item in items"
          :key="item.id"
          class="item flex"
          @click="moveToDetailPage(item.id)"
        >
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <!-- <router-view></router-view>에 효과와 같음 url을 이동할떄마다 nuxt태그 있는 페이지가 다시그려짐-->
      <!-- <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div> -->
    </main>
  </div>
</template>
<script>
import axios from "axios";
import SearchInput from "@/components/SearchInput.vue";
export default {
  async asyncData() {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      const items = data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }));
      return { items };
    } catch (error) {
      const items = [];
      return { items };
    }
  },
  name: "name",
  components: { SearchInput },
  data() {
    return {};
  },

  created() {},
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
