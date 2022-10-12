<template>
  <h1>Hello world</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sapiente
    illum mollitia totam, atque nam nostrum dolorem? Quaerat architecto debitis,
    ullam error eius eveniet repudiandae sit, dolores officiis, earum culpa.
  </p>

  <AppNotify
    message="Your message has been sent"
    type="success"
    position="br"
  />
</template>

<script>
import AppNotify from "./components/AppNotify.vue";

export default {
  name: "App",
  components: {
    AppNotify,
  },
};
</script>

<style scoped>
p {
  color: blue;
}
</style>
