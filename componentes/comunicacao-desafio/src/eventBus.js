import Vue from "vue";
export default new Vue({
  methods: {
    setUserSelected(user) {
      this.$emit("userSelected", user);
    },
    onUserSelected(callback) {
      this.$on("userSelected", callback);
    },
  },
});
