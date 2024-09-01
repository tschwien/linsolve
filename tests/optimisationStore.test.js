import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useOptimizationStore } from '../src/businesslogic/optimizationStore.js';

describe('useOptimizationStore', () => {
    let store;

    beforeEach(() => {
        // Set up Pinia before each test
        setActivePinia(createPinia());
        store = useOptimizationStore(); // Initialize the store
    });

    it('should initialize with correct default state', () => {
        // Check the initial state of selectedOptimization and constraints
        expect(store.selectedOptimization).toBe('');
        expect(store.constraints).toEqual([]);
    });

    it('should return correct selectedOptimizationLabel for "minimization"', () => {
        // Set selectedOptimization to 'minimization'
        store.selectedOptimization = 'minimization';

        // Check if the getter returns 'Minimization'
        expect(store.selectedOptimizationLabel).toBe('Minimization');
    });

    it('should return correct selectedOptimizationLabel for non-"minimization"', () => {
        // Set selectedOptimization to 'maximization'
        store.selectedOptimization = 'maximization';

        // Check if the getter returns 'Maximization'
        expect(store.selectedOptimizationLabel).toBe('Maximization');
    });

    it('should update selectedOptimization when selectOptimization is called', () => {
        // Call selectOptimization with 'minimization'
        store.selectOptimization('minimization');

        // Check if selectedOptimization is updated correctly
        expect(store.selectedOptimization).toBe('minimization');
    });

    it('should add a new constraint when addConstraint is called', () => {
        // Call addConstraint to add a new constraint
        store.addConstraint();

        // Check if constraints array has one constraint
        expect(store.constraints).toHaveLength(1);

        // Check if the newly added constraint has an id and empty content
        expect(store.constraints[0]).toHaveProperty('id');
        expect(store.constraints[0].content).toBe('');
    });

    it('should update a constraint when updateConstraint is called', () => {
        // Add a constraint first
        store.addConstraint();
        const constraintId = store.constraints[0].id; // Get the id of the added constraint

        // Update the constraint with new content
        store.updateConstraint(constraintId, 'New Content');

        // Check if the constraint content is updated correctly
        expect(store.constraints[0].content).toBe('New Content');
    });

    it('should not update any constraint if id does not match', () => {
        // Add a constraint first
        store.addConstraint();

        // Try updating a constraint with a non-existent id
        store.updateConstraint(9999, 'Non-existent Content');

        // Check that the original content is still unchanged
        expect(store.constraints[0].content).toBe(''); // Original content was empty
    });
});
