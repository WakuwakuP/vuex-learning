<template>
  <div class="container--small">
    <ul class="tab">
      <li
        class="tab__item tab__item--login"
        :class="{'tab__item--active': tab === 'LoginPanel' }"
        @click="tab = 'LoginPanel'"
      >Login</li>
      <li
        class="tab__item tab__item--register"
        :class="{'tab__item--active': tab === 'RegisterPanel' }"
        @click="tab = 'RegisterPanel'"
      >Register</li>
    </ul>
    <transition name="panel" mode="out-in">
      <component v-bind:is="tab"></component>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoginPanel from "../components/LoginPanel";
import RegisterPanel from "../components/RegisterPanel";

export default {
  data() {
    return {
      tab: "LoginPanel"
    };
  },
  components: {
    LoginPanel,
    RegisterPanel
  },
  methods: {
    clearError() {
      this.$store.commit("auth/setLoginErrorMessages", null);
      this.$store.commit("auth/setRegisterErrorMessages", null);
    }
  },
  created() {
    this.clearError();
  },
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus
    })
  }
};
</script>
