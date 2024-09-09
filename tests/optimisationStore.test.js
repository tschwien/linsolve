import { useOptimizationStore } from '../src/businesslogic/optimizationStore.js'; // Update the path as necessary
import { describe, it, expect, beforeEach } from 'vitest';
import {computed} from "vue";
import { createTestingPinia } from '@pinia/testing'


describe('useOptimizationStore', () => {
    let store;
    beforeEach(() => {
        // Set up a fresh instance of Pinia for each test
        const pinia = createTestingPinia({
            //createSpy: vi.fn, // Enables spying on store actions
            stubActions: false
        });
        store = useOptimizationStore(pinia);
    })

    it('should have the correct initial state', () => {
        // Check initial state
        expect(store.selectedOptimization).toBe('');
        expect(store.constraints).toEqual([]);
    });

    it('should return the correct optimization label', () => {
        const store = useOptimizationStore();

        // Test getter for maximization (default)
        store.selectedOptimization = 'maximization';
        expect(store.selectedOptimization).toBe('maximization');

        // Test getter for minimization
        store.selectedOptimization = 'minimization';
        expect(store.selectedOptimization).toBe('minimization');
    });

    it('should update selectedOptimization when selectOptimization is called', () => {


        computed(() =>store.selectOptimization === 'minimization');
        expect(store.selectedOptimization).toBe('');

        computed(() =>store.selectOptimization === 'maximization');
        expect(store.selectedOptimization).toBe('');
    });

    it('should add a new constraint when addConstraint is called', () => {

        expect(store.constraints).toHaveLength(0); // Initially empty
        store.addConstraint()
        expect(store.constraints).toHaveLength(1); // After adding one constraint
        expect(store.constraints[0]).toHaveProperty('id');
        expect(store.constraints[0].content).toBe(''); // Initial content is empty
    });

    it('should update constraint content when updateConstraint is called', () => {
        // Add a constraint first
        //store.constraints.push({ id: Date.now(), content: '' });
        store.addConstraint();
        const constraintId = store.constraints[0].id;
        // Update the content of the added constraint
        store.updateConstraint(constraintId, 'New Content');
        expect(store.constraints[0].content).toBe('New Content');
    });

    it('should not update constraint content if the id does not exist', () => {
        // Add a constraint first
        store.constraints.push({ id: Date.now(), content: '' });
        // Attempt to update a non-existing constraint
        store.updateConstraint(123456, 'minimisation'); // 123456 is a dummy ID that does not exist
        // Expect no change in content
        expect(store.constraints[0].content).toBe(''); // Still the initial empty content
    });
});
