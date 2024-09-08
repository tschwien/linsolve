import { defineStore } from 'pinia';

// Defining a new store to manage the state and actions related to optimization problems
export const useOptimizationStore = defineStore('optimization', {
    // `state` function returns an object representing the reactive state of the store
    state: () => ({
        selectedOptimization: '',
        constraints: [],
    }),

    // Getters are used to compute derived state from the store's state
    getters: {
        // Returns a human-readable label for the selected optimization ('Minimization' or 'Maximization')
        selectedOptimizationLabel(state) {
            return state.selectedOptimization === 'minimization' ? 'Minimization' : 'Maximization';
        },
    },

    // Actions section: methods that allow modifying the state or performing logic
    actions: {
        // Action to set the selected optimization type ('minimization' or 'maximization')
        selectOptimization(option) {
            this.selectedOptimization = option;
        },

        // Action to add a new constraint to the list of constraints
        addConstraint() {
            this.constraints.push({ id: Date.now(), content: '' });
        },
        deleteConstraint(){
            this.constraints.pop()
        },

        // Action to update the content of a specific constraint identified by its `id`
        updateConstraint(id, content) {
            const constraint = this.constraints.find((c) => c.id === id);
            if (constraint) {
                constraint.content = content;
            }
        },
    },
});
