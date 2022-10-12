<template>
  <nav class="navbar navbar-light navbar-expand-lg bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand" href="#">
        Vue File Uploader
      </a>
      <nav-form
        @search="searchTerm = $event"
        @reset="searchTerm = ''"
      ></nav-form>
    </div>
  </nav>
  <simple-uploader-view :search-term="searchTerm"></simple-uploader-view>
</template>

<script>
import NavForm from "./components/NavForm.vue";
import SimpleUploaderView from "./views/SimpleUploaderView.vue";

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
    };
  },
  components: {
    NavForm,
    SimpleUploaderView,
  },
};
</script>

<style>
.rounded-button {
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border: none;
  border-radius: 50%;
  color: #888;
  text-align: center;
  text-decoration: none;
  background: #fff;
  font-size: 20px;
  font-weight: bold;
}
.rounded-button:hover {
  background: #ddd;
  color: #999;
}

.custom-progress {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
}

.custom-progress-bar {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
}
</style>
