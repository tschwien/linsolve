<template>
<Header></Header>
<OptimizationProblemInput></OptimizationProblemInput>
<Footer></Footer>
</template>
<script>
import Header from '../components/Header.vue';
import OptimizationProblemInput from '../components/OptimizationProblemInput.vue';
import Footer from '../components/Footer.vue';
export default{
    components:{
        Header, 
        Footer, 
        OptimizationProblemInput
    }
}
</script>
<style>
</style>