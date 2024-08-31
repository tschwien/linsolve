
import { defineStore } from 'pinia';

export const useOptimizationStore = defineStore('optimization', {
    state: () => ({
        selectedOptimization: '',
        constraints: [],
    }),
    getters: {
        selectedOptimizationLabel(state) {
            return state.selectedOptimization === 'minimization' ? 'Minimization' : 'Maximization';
        }
    },
    actions: {
        selectOptimization(option) {
            this.selectedOptimization = option;
        },
        addConstraint() {
            this.constraints.push({ id: Date.now(), content: '' });
        },
        updateConstraint(id, content) {
            const constraint = this.constraints.find(c => c.id === id);
            if (constraint) {
                constraint.content = content;
            }
        }
    }
});

