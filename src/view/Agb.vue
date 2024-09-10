<template>
    <Header></Header>
    <Agbs class="mainContent"></Agbs>
    <Footer></Footer>
    </template>
    <script>
    import Header from '../components/Header.vue';
    import Agbs from '../components/Agbs.vue';
    import Footer from '../components/Footer.vue';
    export default{
        components:{
            Header, 
            Footer, 
            Agbs
        }
    }
    </script>
    <style>
    .mainContent{
        margin-top: 5%;
        margin-bottom: 5%;
    }
    </style>