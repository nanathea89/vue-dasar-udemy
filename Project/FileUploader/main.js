const app = Vue.createApp({
data(){
    return {
        message : 'Hai Vue',
        msgUpload:"Ready to upload",
        isUpload : false,
        uploadImg:'',
        selectedFile:'',
        selectedFileName:null,
        isUploadReadonly:false,
        // files:[],
        hoveredItem:null,
        files:[
            {
                id:1,
                name:'Data Karyawan.xls',
            },
            {
                id:2,
                name:'Upload Store.csv',
                
            },
            {
                id:3,
                name:'Data toko.xlsx'
            }
        ],
        progress:0, 
    }
},
methods:{
    handleUpload(){
        this.progress=0;
        this.isUpload=true;
        this.uploadImg='loading.gif';
        // const progressInterval = setInterval(()=>{
        //     this.progress++;
        //     if(this.progress==100){
        //         clearInterval(progressInterval)
        //         setTimeout(()=>{
        //             this.files.push({
        //                 id:this.files.length+1,
        //                 name:this.selectedFileName
        //             })
        //             this.progress=0;
        //             this.uploadImg=null;
        //             this.isUpload=false;
        //             this.selectedFile=null;
        //             this.selectedFileName=null;
        //             // this.progress=0
        //         },1000);
        //     }
        // },50);

        const progressInterval = setInterval(()=>{
            this.progress++;
            if(this.progress==100){

                setTimeout(()=>{
                    clearInterval(progressInterval)
                    this.files.push({
                        id:this.files.length+1,
                        name:this.selectedFileName
                    })
                    this.progress=0;
                    this.uploadImg=null;
                    this.isUpload=false;
                    this.selectedFile=null;
                    this.selectedFileName=null;
                },1000);
               

            }
        },50);

    },
    browseFile(){
        this.$refs.fileUpload.click();
    },
    changeUpload(){
        this.file = this.$refs.fileUpload.files;
        this.selectedFile = this.file[0];
        this.selectedFileName = this.file[0].name;
    },
    cancelUpload(){
        this.selectedFile='';
        this.selectedFileName=null;
        this.isUpload=false;
        // this.files=[];
    },
    handleRemove(file){ 
        if(confirm('are you sure?')){
           const index = this.files.findIndex(file =>file.id == file.id)
           this.files.splice(index,1);
           console.log(index)
           console.log(this.files)
        }
    }
}
}).mount('#app');

// const mountedApp = app.mount('#app')