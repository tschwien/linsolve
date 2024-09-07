import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useDropdownStore } from '../src/businesslogic/dropdownStore.js';
describe('useDropdownStore', () => {
    let store;

    beforeEach(() => {
        // Set up Pinia before each test
        setActivePinia(createPinia());
        store = useDropdownStore();
    });

    it('should initialize with isOpen set to false', () => {
        // Check the initial state of isOpen
        expect(store.isOpen).toBe(false);
    });

    it('should toggle isOpen state when toggleDropdown is called', () => {
        // Call toggleDropdown and check if isOpen toggles
        store.toggleDropdown();
        expect(store.isOpen).toBe(true); // After first call, it should be true

        store.toggleDropdown();
        expect(store.isOpen).toBe(false); // After second call, it should revert to false
    });
});
