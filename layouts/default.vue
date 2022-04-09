<template>
  <div id="name">
    <h1>{{ $route.name }} page</h1>
    <Nuxt />
    <NuxtLink to="/">홈페이지</NuxtLink>
    <NuxtLink to="/main">메인</NuxtLink>
    <NuxtLink to="/product">상품</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
