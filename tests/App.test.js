import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue'
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue';
import { createTestingPinia } from '@pinia/testing'


//TODO find fix for the Test
describe.skip('Component', () => {

    it('should render Header and Footer components', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [createTestingPinia()],
            },
        })



        // Check if the Header component is rendered
        expect(wrapper.findComponent(Header).exists()).toBe(true);

        // Check if the Footer component is rendered
        expect(wrapper.findComponent(Footer).exists()).toBe(true);
    });

});
