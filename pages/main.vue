<template>
  <div id="name">
    <h1>homepage</h1>
    <!-- <router-view></router-view>에 효과와 같음 url을 이동할떄마다 nuxt태그 있는 페이지가 다시그려짐-->
  </div>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
export default {
  name: "name",
  components: { NuxtLogo },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
