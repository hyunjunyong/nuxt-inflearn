<template>
  <div id="name">
    <h1>상세페이지</h1>
    <img src="product.imageUrl" alt="product.name" />
    <p>name : {{ product.name }}</p>
    <p>price : {{ product.price }}</p>
  </div>
</template>

<script>
import { fetchProductById } from "@/api/index.js";
import axios from "axios";
export default {
  async asyncData({ params }) {
    // const id = console.log(params.id);
    const response = await fetchProductById(params.id);
    const product = response.data;
    return { product };
  },
  name: "name",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
