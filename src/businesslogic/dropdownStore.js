import { defineStore } from 'pinia'; 

// Defining a new store for managing the state of a dropdown component
export const useDropdownStore = defineStore('dropdown', {
  // The `state` function returns an object representing the reactive state of the store
  state: () => ({
    isOpen: false, 
  }),
  
  // Actions section: methods to modify the state or perform other logic
  actions: {
    // A method that toggles the dropdown state (open/close)
    toggleDropdown() {
      this.isOpen = !this.isOpen; 
    },
  }
});
