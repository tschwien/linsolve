<script>
import { languageStore } from '../businesslogic/languageStore.js';
export default {
  name: "Header",
  data() {
   return{
    languageStore,
   }
  },
  

};
</script>

<template>
  <header class="header">
    <h1 class="title">LinSolve</h1>
    <img src="../assets/globe.png" alt="language selection" class="globe"  @click="languageStore.toggleDropdown()">
    <div v-if="languageStore.dropdownOpen" class="dropdown-menu">
       <a class="dropdown-link">Deutsch</a>
       <a class="dropdown-link">English</a>
    </div>
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
  padding: 20px;          
  background-color: rgba(7, 7, 152, 0.945);  
  color: white;            
  z-index: 1000;           
}

.title {
  font-size: 2rem;        
  text-align: center;  
  justify-content: center;   
  margin-left: auto;
}
.globe{
  height: 2%;
  width: 2%;
  margin-left: auto;
  justify-content: flex-end;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 20px; /* Aligns with the globe icon */
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

.dropdown-link {
  display: block;
  padding: 12px 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.dropdown-link:hover {
  background-color: #f1f1f1;
}




</style>
