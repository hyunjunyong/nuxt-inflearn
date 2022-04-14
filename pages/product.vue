<template>
  <div id="name">
    상품 페이지
    {{ items }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const res = await axios.get("http://localhost:3000/products");
    const items = res.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      };
    });
    return { items };
  },
  name: "name",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
