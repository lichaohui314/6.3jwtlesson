<template>
  <div class="home">
    用户名:{{nickname}}
    <Spin v-if='showloading'
          fix>加载中</Spin>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["nickname", "showloading"])
  }
};
</script>