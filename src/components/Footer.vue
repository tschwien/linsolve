<script>
    export default{
        name:'Footer',
    }
</script>
<template>
    <footer class="footer">
        <a class="footer-link">Dokumentation</a>
        <a class="footer-link">Über uns</a>
        <a class="footer-link">AGB</a>
    </footer>
</template>
<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer{
    position: fixed;         
    bottom: 0;                 
    left: 0;                
    width: 100%;            
    display: flex;
    background-color:  rgba(7, 7, 152, 0.945) ;
    color: white;
    justify-content: center;
    align-items: center;
    }
.footer-link{
    padding: 1rem;
    color: white;
}

</style>