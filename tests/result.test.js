import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Component from '../src/view/Result.vue';
import Header from '../src/components/Header.vue';
import Result_math from '../src/components/Result_math.vue';
import Footer from '../src/components/Footer.vue';

describe('YourComponent.vue', () => {
    let wrapper;
    beforeEach(() => {
        // Mount the component with a testing Pinia instance
        wrapper = mount(Component, {
            global: {
                plugins: [createTestingPinia()],
                components: { Header, Result_math, Footer }, // Register components for the test
                mocks: {
                    $t: (msg) => msg, // Mock i18n translation if necessary
                },
            },
        });
    });

    it('renders Header component', () => {
        expect(wrapper.findComponent(Header).exists()).toBe(true);
    });

    it('renders Result_math component', () => {
        expect(wrapper.findComponent(Result_math).exists()).toBe(true);
    });

    it('renders Footer component', () => {
        expect(wrapper.findComponent(Footer).exists()).toBe(true);
    });
});
