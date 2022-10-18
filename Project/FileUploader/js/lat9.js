const app = Vue.createApp({
    data(){
        return {

            searchTerm:'',
            limitPage:3,
            totalPage:0,
            products:[
                {
                    id:1,
                    descp:'Mie Sedap',
                    qty : 10,
                    price:2500
                },
                {
                    id:2,
                    descp:'Mie Indomie',
                    qty : 2,
                    price:3500
                },
                {
                    id:3,
                    descp:'Kecap Sedap',
                    qty : 10,
                    price:4500
                },
                {
                    id:4,
                    descp:'Sarden ABC',
                    qty : 10,
                    price:5000
                },
                {
                    id:5,
                    descp:'Saos ABC',
                    qty : 10,
                    price:7000
                },
                {
                    id:6,
                    descp:'Sarimi',
                    qty : 10,
                    price:4000
                },
                {
                    id:7,
                    descp:'Saos Bon Cabe',
                    qty : 10,
                    price:4000
                },
                
            ]
        }
    },
    methods(){
        getTotalPage:{
            this.totalPage= Math.ceil(this.products.length/this.limitPage);
        }
    }
}).mount('#app');