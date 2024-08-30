import { describe, it, expect, vi } from 'vitest';
import { reactive } from "vue";
import { mount } from '@vue/test-utils'
import Header from '../src/components/Header.vue';
import { languageStore } from '../src/businesslogic/languageStore.js';

// Mock const
const mockLanguageStore = reactive({
    dropdownOpen: false,
    toggleDropdown: vi.fn(),
});

// Mock of the languageStore module
vi.mock('../businesslogic/languageStore.js', () => ({
    languageStore: mockLanguageStore,
}));

describe('Header Component', () => {
    it('check if languageStore exits and is not visible until clicked', () => {
        // Mounting the component
        const wrapper = mount(Header);
        // Check if the component's data contains languageStore
        expect(wrapper.vm.languageStore).toBeDefined();
        expect(wrapper.vm.languageStore.dropdownOpen).toBe(false);
    });
    it('test if everything is visible', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('.header').isVisible()).toBe(true);
        expect(wrapper.find('.globe').isVisible()).toBe(true);
        expect(wrapper.find('.title').isVisible()).toBe(true);
    });
});


