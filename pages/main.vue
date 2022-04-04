<template>
  <div id="name">
    <Nuxt />
    <Nuxt></Nuxt>
    <!-- <router-view></router-view>에 효과와 같음 url을 이동할떄마다 nuxt태그 있는 페이지가 다시그려짐-->
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
