<script>
export default {
  name: "Header",

};
</script>

<template>
  <header class="header">
    <h1 class="title">LinSolve</h1>
  
  </header>
      
</template>

<style scoped>
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  position: fixed;         
  top: 0;                 
  left: 0;                
  width: 100%;            
  display: flex;
  justify-content: center; 
  align-items: center;     
  padding: 20px;          
  background-color: rgba(7, 7, 152, 0.945);  
  color: white;            
  z-index: 1000;           
}

.title {
  font-size: 2rem;        
  text-align: center;     
}





</style>
