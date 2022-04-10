<template>
  <div id="name">
    <h1>homepage</h1>
    <p>{{ products }}</p>
    <ProductList />
    <Nuxt />
    <!-- <router-view></router-view>에 효과와 같음 url을 이동할떄마다 nuxt태그 있는 페이지가 다시그려짐-->
  </div>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
import axios from "axios";
import ProductList from "@/components/ProductList.vue";
export default {
  async asyncData() {
    const res = await axios.get("http://localhost:3000/products");
    const products = res.data;
    return { products };
  },
  name: "name",
  components: { NuxtLogo },
  data() {
    return {};
  },

  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
