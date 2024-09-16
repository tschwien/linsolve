import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import Component from '../src/components/Result_math.vue'; // Adjust the path as needed
import { useOptimizationStore } from '../src/businesslogic/optimizationStore.js';


describe('Component Test', () => {
    let wrapper;
    let optimizationStore;


    beforeEach(() => {
        // Create a testing Pinia instance with spies enabled
        const pinia = createTestingPinia({
            createSpy: vi.fn, // Automatically mock all actions
            stubActions: false, // Allow actions to work correctly

        });

        // Access the optimization store
        optimizationStore = useOptimizationStore(pinia);

        // Mount the component with the testing Pinia instance
        wrapper = mount(Component, {
            global: {
                plugins: [pinia],
                mocks: {
                    $t: (msg) => msg // Simple mock for translation function
                },
            },
        });
    });

    it('renders static texts correctly', () => {
        // Check if "Mathematische Lösung:" is rendered
        expect(wrapper.text()).toContain('Mathematische Lösung:');

        // Check if "Graphische Lösung:" is rendered
        expect(wrapper.text()).toContain('Graphische Lösung:');
    });

    it('renders the "addConstraint" button', () => {
        const button = wrapper.find('button.mainButton');
        expect(button.exists()).toBe(true);
        expect(button.text()).toBe('addConstraint'); // Assuming `$t` resolves to 'addConstraint'
    });
//TODO Fix test
    it.skip('calls addConstraint action when button is clicked', async () => {
        // Ensure the store action is properly mocked
        //const addConstraintSpy = vi.spyOn(optimizationStore, 'addConstraint');

        // Find the button and trigger a click
        const button = wrapper.find('button.mainButton');
        await button.trigger('click');

        // Check if the store action addConstraint was called
        expect(optimizationStore.addConstraint()).toHaveBeenCalledTimes(1);
    });
});
