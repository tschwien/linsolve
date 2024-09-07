import { describe, it, expect } from 'vitest';
import { createI18n } from 'vue-i18n';
import i18n from '../src/businesslogic/i18n.js';

//TODO add tests for messages when implemented

describe('i18n Configuration', () => {
    let i18nInstance;

    beforeEach(() => {
        // Create a new instance of i18n from the same configuration
        i18nInstance = createI18n({
            locale: 'de',
            fallbackLocale: 'de',
            messages: {

            },
        });
    });

    it('should have the default locale set to "de"', () => {
        // Get the locale from the i18n instance
        const locale = i18nInstance.global.locale;
        expect(locale).toBe('de');
    });

    it('should have the fallback locale set to "de"', () => {
        // Get the fallback locale from the i18n instance
        const fallbackLocale = i18nInstance.global.fallbackLocale;
        expect(fallbackLocale).toBe('de');
    });

});
