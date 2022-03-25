<template>
  <div v-bind:class="[{ active: isActive }, errorClass]">
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>
    <button>toggle</button>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      errorClass: "error",
      isActive: true,
      loginType: "e-mail",
    };
  },
  methods: {
    toggle() {
      this.loginType = "username";
    },
  },
};
</script>

<style>
div.active {
  color: green;
  font-size: 20px;
}
div.error {
  text-decoration: line-through;
}
</style>
