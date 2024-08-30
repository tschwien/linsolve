import { describe, it, expect } from 'vitest';
import { languageStore } from '../src/businesslogic/languageStore.js'; // Adjust the path as needed

describe('languageStore', () => {
    it('should have initial state of dropdownOpen as false', () => {
        expect(languageStore.dropdownOpen).toBe(false);
    });

    it('should toggle dropdownOpen state when toggleDropdown is called', () => {
        // Call toggleDropdown to change the state to true
        languageStore.toggleDropdown();
        expect(languageStore.dropdownOpen).toBe(true);
        // Call toggleDropdown again to change the state back to false
        languageStore.toggleDropdown();
        expect(languageStore.dropdownOpen).toBe(false);
    });
});
