<template>
  <div class="panel">
    <form class="form" @submit.prevent="register">
      <div v-if="registerErrors" class="errors">
        <ul v-if="registerErrors.name">
          <li v-for="msg in registerErrors.name" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="registerErrors.email">
          <li v-for="msg in registerErrors.email" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="registerErrors.password">
          <li v-for="msg in registerErrors.password" :key="msg">{{ msg }}</li>
        </ul>
      </div>
      <label for="username">Name</label>
      <input type="text" class="form__item" id="username" v-model="registerForm.name">
      <label for="email">Email</label>
      <input type="text" class="form__item" id="email" v-model="registerForm.email">
      <label for="password">Password</label>
      <input type="password" class="form__item" id="password" v-model="registerForm.password">
      <label for="password-confirmation">Password (confirm)</label>
      <input
        type="password"
        class="form__item"
        id="password-confirmation"
        v-model="registerForm.password_confirmation"
      >
      <div class="form__button">
        <button type="submit" class="button button--inverse">register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RegisterPanel",
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async register() {
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch("auth/register", this.registerForm);

      if (this.apiStatus) {
        // トップページに移動する
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus,
      registerErrors: state => state.auth.registerErrors
    })
  }
};
</script>