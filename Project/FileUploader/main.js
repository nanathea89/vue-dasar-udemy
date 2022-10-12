const app = Vue.createApp({
data(){
    return {
        message : 'Hai Vue',
        msgUpload:"Ready to upload",
        isUpload : false,
        uploadImg:'',
        selectedFile:'no selected file',
        isUploadReadonly:false
    }
}
}).mount('#app');

// const mountedApp = app.mount('#app')