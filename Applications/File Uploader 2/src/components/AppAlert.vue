<template>
  <div :class="alertClasses" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ["message", "type"],
  computed: {
    alertClasses() {
      return ["alert", `alert-${this.type}`];
    },
  },
};
</script>
