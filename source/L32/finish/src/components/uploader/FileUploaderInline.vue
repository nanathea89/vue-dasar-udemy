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
        @click="cancel"
      >
        Cancel
      </button>
      <button
        v-else-if="canceled"
        class="btn btn-outline-secondary"
        :disabled="uploading"
        @click="handleUpload"
      >
        Retry
      </button>
      <button v-else class="btn btn-outline-secondary" @click="browseFile">
        Select File
      </button>
      <button
        v-if="!selectedFile || canceled"
        class="btn btn-outline-secondary"
        @click="$emit('closed')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["file-uploaded", "closed"],

  data() {
    return {
      uploading: false,
      selectedFile: "",
      progress: 0,
      canceled: false,
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
      this.canceled = false;

      const updateProgress = setInterval(() => {
        this.progress++;

        if (!this.uploading || this.canceled) {
          clearInterval(updateProgress);
          return;
        }

        if (this.progress === 100) {
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
      this.handleUpload();
    },
    cancel() {
      this.uploading = false;
      this.canceled = true;
      this.progress = 0;
    },
  },
};
</script>
