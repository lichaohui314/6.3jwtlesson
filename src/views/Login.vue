<template>
  <div>
    <div>
      <Input v-model="user"
             placeholder="请输入用户名"
             style="width:300px" /><br>
      <Input v-model="pass"
             placeholder="请输入密码"
             style="width:300px" />
    </div>
    <Button @click='login'
            type="success">登录</Button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["tologin"]),
    login() {
      // 登录
      this.tologin({ user: this.user, pass: this.pass });
    }
  }
};
</script>
