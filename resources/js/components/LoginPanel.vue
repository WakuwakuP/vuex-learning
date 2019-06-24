<template>
  <div class="panel">
    <form class="form" @submit.prevent="login">
      <div v-if="loginErrors" class="errors">
        <ul v-if="loginErrors.name">
          <li v-for="msg in loginErrors.name" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="loginErrors.email">
          <li v-for="msg in loginErrors.email" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="loginErrors.password">
          <li v-for="msg in loginErrors.password" :key="msg">{{ msg }}</li>
        </ul>
      </div>
      <label for="login-email">Email</label>
      <input type="text" class="form__item" id="login-email" v-model="loginForm.email">
      <label for="login-password">Password</label>
      <input type="password" class="form__item" id="login-password" v-model="loginForm.password">
      <div class="form__button">
        <button type="submit" class="button button--inverse" id="login-submit">login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginPanel",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      // authストアのloginアクションを呼び出す
      await this.$store.dispatch("auth/login", this.loginForm);

      // トップページに移動する
      if (this.apiStatus) {
        // トップページに移動する
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus,
      loginErrors: state => state.auth.loginErrorMessages
    })
  }
};
</script>
