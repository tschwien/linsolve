import { defineStore } from 'pinia';

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    isOpen: false,
  }),
  
  actions: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  }
});
