import { defineStore } from 'pinia';




// Defining a new store to manage the state and actions related to optimization problems
export const useOptimizationStore = defineStore('optimization', {
    // `state` function returns an object representing the reactive state of the store
    state: () => ({
        selectedOptimization: '',
        constraints: [],
        objectiveFunction: '',
    }),

    // Getters are used to compute derived state from the store's state
    getters: {
        // Returns a human-readable label for the selected optimization ('Minimization' or 'Maximization')
        selectedOptimizationLabel(state) {
            return state.selectedOptimization === 'Minimize' ? 'Minimize' : 'Maximize';
        },
        //returns the Constraints as Strings
        getObjectiveFunction(){
            return this.objectiveFunction;
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
            console.log(this.constraints[0])
            this.constraints.push({ id: Date.now(), content: '' });
            
        },
        //Setter for Objectiv Function
        setObjectiveFunction(objectiveFunc){
            this.objectiveFunction = objectiveFunc;
        },
    //getter for Objective Function
        // Action to update the content of a specific constraint identified by its `id`
        updateConstraint(id, content) {

            // Find the index of the constraint to be updated
            const index = this.constraints.findIndex((c) => c.id === id);

            // If the constraint exists, update its content
            if (index !== -1) {
                // Use Vue's reactivity to update the constraint
                this.constraints[index] = { ...this.constraints[index], content }; // Create a new object to ensure reactivity
            }
            console.log(this.constraints[0]);
        },

    },
});
