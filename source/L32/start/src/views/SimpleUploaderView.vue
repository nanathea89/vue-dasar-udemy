<template>
  <div class="container py-5">
    <section-heading
      text="My files"
      @sorted="sortDir = $event"
    ></section-heading>

    <file-uploader-inline
      @file-uploaded="addUploadedFile($event)"
    ></file-uploader-inline>

    <app-alert
      message="You  have no any files"
      type="warning"
      v-if="!files.length"
    ></app-alert>

    <ul class="list-group my-3" v-else>
      <file-item
        v-for="file in filesSorted"
        :key="file.id"
        :file="file"
        @file-removed="removeFile($event)"
      ></file-item>
    </ul>
  </div>
</template>

<script>
import FileItem from "../components/files/FileItem.vue";
import FileUploaderInline from "../components/uploader/FileUploaderInline.vue";

export default {
  props: ["searchTerm"],
  components: {
    FileItem,
    FileUploaderInline,
  },
  data() {
    return {
      files: [
        {
          id: 1,
          name: "File 1.jpg",
        },
        {
          id: 2,
          name: "File 2.jpg",
        },
        {
          id: 3,
          name: "File 3.jpg",
        },
      ],
      //   searchTerm: "",
      sortDir: 1,
    };
  },
  methods: {
    removeFile(file) {
      const index = this.files.findIndex((item) => item.id === file.id);
      this.files.splice(index, 1);
    },
    addUploadedFile(file) {
      this.files.push({
        id: this.files.length + 1,
        name: file.name,
      });
    },
  },

  computed: {
    filesFiltered() {
      return this.files.filter((file) =>
        file.name.match(new RegExp(this.searchTerm, "i"))
      );
    },

    filesSorted() {
      return this.filesFiltered.sort((a, b) => {
        if (a.name < b.name) return -1 * this.sortDir;
        else if (a.name > b.name) return 1 * this.sortDir;
        else return 0;
      });
    },
  },
};
</script>
