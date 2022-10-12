<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1>{{ text }}</h1>
    <a href="#" class="rounded-button" @click.prevent="toggleSortDir">
      <svg
        v-if="sortDir === 1"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-up-short"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
      <svg
        v-else
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-down-short"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ["text"],

  emits: ["sorted"],

  data() {
    return {
      sortDir: 1,
    };
  },

  methods: {
    toggleSortDir() {
      this.sortDir = this.sortDir * -1;
      this.$emit("sorted", this.sortDir);
    },
  },
};
</script>
