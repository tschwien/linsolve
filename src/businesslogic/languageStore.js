import { reactive } from "vue";
export const languageStore= reactive({
    dropdownOpen:false,
    toggleDropdown(){
        this.dropdownOpen = !this.dropdownOpen; // Toggle the dropdown state
    }

})