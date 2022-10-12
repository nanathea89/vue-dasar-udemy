<template>
  <div class="alert" :class="alertType" role="alert" v-if="open">
    {{ message }}
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="hide"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["message", "type", "position"],
  data() {
    return {
      open: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.open = false;
    }, 3000);
  },
  methods: {
    hide() {
      this.open = false;
    },
  },
  computed: {
    alertType() {
      return [`alert-${this.type}`, `alert-${this.position}`];
    },
  },
};
</script>

<style scoped>
.alert-tl {
  position: fixed;
  left: 30px;
  top: 10px;
}
.alert-bl {
  position: fixed;
  left: 30px;
  bottom: 10px;
}
.alert-tr {
  position: fixed;
  right: 30px;
  top: 10px;
}
.alert-br {
  position: fixed;
  right: 30px;
  bottom: 10px;
}
</style>
