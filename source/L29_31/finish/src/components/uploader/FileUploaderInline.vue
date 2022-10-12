<template>
  <div class="input-group my-2">
    <div class="custom-progress" v-if="uploading">
      <div
        class="custom-progress-bar"
        role="progressbar"
        :style="{ width: `${progress}%` }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progress }}%
      </div>
    </div>
    <input
      v-else
      type="text"
      class="form-control"
      :value="selectedFileName"
      readonly
      placeholder="No file selected"
    />
    <input
      type="file"
      style="display: none;"
      ref="file"
      @change="handleChange"
    />
    <div class="input-group-append">
      <button
        v-if="selectedFile && uploading"
        class="btn btn-outline-secondary"
        @click="uploading = false"
      >
        Cancel
      </button>
      <button
        v-else-if="selectedFile"
        class="btn btn-outline-secondary"
        :disabled="uploading"
        @click="handleUpload"
      >
        Upload
      </button>
      <button v-else class="btn btn-outline-secondary" @click="browseFile">
        Select File
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["file-uploaded"],

  data() {
    return {
      uploading: false,
      selectedFile: "",
      progress: 0,
    };
  },

  computed: {
    selectedFileName() {
      return this.selectedFile ? this.selectedFile.name : "";
    },
  },

  methods: {
    handleUpload() {
      this.uploading = true;

      const updateProgress = setInterval(() => {
        this.progress++;

        if (this.progress === 100) {
          clearInterval(updateProgress);

          setTimeout(() => {
            this.$emit("file-uploaded", this.selectedFile);

            this.uploading = false;
            this.selectedFile = null;
          }, 1000);
        }
      }, 50);
    },
    browseFile() {
      this.$refs.file.click();
    },
    handleChange(event) {
      const files = event.target.files;
      this.selectedFile = files[0];
    },
  },
};
</script>
