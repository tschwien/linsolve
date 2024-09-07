
<script>
import { languageStore } from '../businesslogic/languageStore.js'; 
import { useDropdownStore } from '../businesslogic/dropdownStore.js'; 
export default {
  name: "Header", 

  // `setup` function is part of Vue's Composition API to set up reactive state and logic
  setup(){
    // Accessing the language store to manage localization (i18n)
    const i18nStore = languageStore();

    // Accessing the dropdown store to manage the state of the language dropdown
    const dropdown = useDropdownStore();

   
    return { i18nStore, dropdown };
  },

 
  methods: {
    // Method to change the current language (locale) by calling the `setLocale` action from the language store
    changeLocale(locale){
      this.i18nStore.setLocale(locale); // Updates the locale in both the store and the i18n instance
    },

    // Method to toggle the state of the language dropdown menu by calling `toggleDropdown` action from the dropdown store
    toggleLanguageDropdown(){
      this.dropdown.toggleDropdown(); 
    }
  }
};
</script>

<template>
  <header class="header">
    <h1 class="title">LinSolve</h1>
    <img src="../assets/globe.png" alt="language selection" class="globe"  @click="toggleLanguageDropdown()">
    <p class="language">{{ $t('language') }}</p>
    <div v-if="dropdown.isOpen" class="dropdown-menu">
       <p class="dropdown-link" @click="changeLocale('de')">Deutsch</p>
       <p class="dropdown-link" @click="changeLocale('en')">English</p>
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
.language{
  padding-left: 3px;
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
