import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { languageStore } from '../src/businesslogic/languageStore.js';
import { defineStore } from 'pinia';
import i18n from '../src/businesslogic/i18n.js';

// Mock the i18n module
vi.mock('../path/to/i18n', () => ({
    default: {
        global: {
            locale: 'de', // Set initial locale for mocking
        },
    },
}));

describe('languageStore', () => {
    beforeEach(() => {
        // Set up Pinia before each test
        setActivePinia(createPinia());
    });

    it('should have the initial state of locale set to i18n global locale', () => {
        const store = languageStore();
        // Check if the initial locale is set correctly from i18n
        expect(store.locale).toBe('de'); // 'en' is the mocked initial value
    });
    it('should set the locale correctly when setLocale is called', () => {
        const store = languageStore();
        // Call setLocale to change the locale
        store.setLocale('en');
        // Check if the store's locale is updated
        expect(store.locale).toBe('en');
    });
});
