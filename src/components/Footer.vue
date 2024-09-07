<script>
    export default{
        name:'Footer',
    }
</script>
<template>
    <footer class="footer">
        <a class="footer-link">{{ $t('documentation') }}</a>
        <a class="footer-link">{{ $t('aboutUs') }}</a>
        <a class="footer-link">{{ $t('gtcs') }}</a>
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
.footer-link:hover {
  color: #f1f1f1;
  font-weight: bolder;
}

</style>