<template>
  <div class="form-inline mt-2 mt-md-0">
    <input
      class="form-control"
      type="text"
      placeholder="Search"
      :value="searchTerm"
      @keyup.ctrl.enter="handleEscape"
      @keyup.enter.exact="handleEnter"
      @keyup.esc="handleEscape"
    />
  </div>
</template>

<script>
export default {
  emits: ["search", "reset"],
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handleEnter(event) {
      this.searchTerm = event.target.value;
      this.$emit("search", this.searchTerm);
    },
    handleEscape() {
      this.searchTerm = "";
      this.$emit("reset", this.searchTerm);
    },
  },
};
</script>
