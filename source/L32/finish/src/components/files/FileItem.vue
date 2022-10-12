<template>
  <li
    @mouseenter="hoveredItem = file.id"
    @mouseout="hoveredItem = null"
    :class="[
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      hoveredItem === file.id ? 'list-group-item-warning' : '',
    ]"
    :key="`file-${file.id}`"
  >
    {{ file.name }}
    <a href="#" @click.prevent="handleRemove(file)">&times;</a>
  </li>
</template>

<script>
export default {
  emits: ["file-removed"],
  props: ["file"],
  data() {
    return {
      hoveredItem: null,
    };
  },
  methods: {
    handleRemove(file) {
      if (confirm("Are you sure?")) {
        this.$emit("file-removed", file);
      }
    },
  },
};
</script>
