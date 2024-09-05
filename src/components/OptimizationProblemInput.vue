<script>
import 'mathlive'; 
import { useOptimizationStore } from '../businesslogic/optimizationStore'; 
import { computed } from 'vue'; 

export default {
    name: 'OptimizationProblemInput', 
    setup() {
       // Accessing the store for optimization-related data
        const optimizationStore = useOptimizationStore(); 

        // Configuring the MathLive virtual keyboard layout to use the "compact" option
        mathVirtualKeyboard.layouts = ["compact"];

        // Defining computed properties to determine whether the selected optimization is 'minimization' or 'maximization'
        const isMinimizationSelected = computed(() => optimizationStore.selectedOptimization === 'minimization');
        const isMaximizationSelected = computed(() => optimizationStore.selectedOptimization === 'maximization');
        
        // Returning variables and computed properties to be used in the template or by other parts of the component
        return {
            optimizationStore, 
            isMinimizationSelected, 
            isMaximizationSelected, 
        };
    },
};
</script>


<template>
    <div class="inputContainer">
        <div class="firstRow">
            <button 
                class="selectionOptimization" 
                :class="{ selected: isMinimizationSelected }"
                @click="optimizationStore.selectOptimization('minimization')">
                {{ $t('minimization') }}
            </button>
            <button 
                class="selectionOptimization" 
                :class="{ selected: isMaximizationSelected }"
                @click="optimizationStore.selectOptimization('maximization')">
                {{ $t('maximization') }}
            </button>
        </div>

        <div class="conditionContainer">
            <math-field class="condition" :placeholder="$t('condition')"></math-field>
        </div>

        <div id="constraintContainer">
            <math-field class="constraint" :placeholder="$t('constraint')"></math-field>
            <math-field class="constraint" :placeholder="$t('constraint')"></math-field>
            <math-field 
                v-for="constraint in optimizationStore.constraints" 
                :key="constraint.id"
                class="constraint"
                :placeholder="$t('constraint')"
                @input="optimizationStore.updateConstraint(constraint.id, $event.target.value)">
            </math-field>
        </div>

        <div class="lastRow">
            <button class="mainButton" @click="optimizationStore.addConstraint()">{{ $t('addConstraint') }}</button>
            <button class="mainButton">{{ $t('solve') }}</button>
        </div>
    </div>
</template>

<style scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.firstRow {
  display: flex;
  justify-content: flex-end;
  width: 40%;
  margin-bottom: 10px;
}

.selectionOptimization {
  font-size: x-small;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f0f0f0; 
  border: 1px solid #ccc; 
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.selectionOptimization.selected {
  background-color: rgba(7, 7, 152, 0.945);
  color: white;
}

.conditionContainer,
#constraintContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.condition {
  width: 90%;
  max-width: 600px;
  margin-top: 10px;
}

.constraint {
  width: 70%;
  max-width: 550px;
  margin-top: 10px;
}

.lastRow {
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  max-width: 100%;
  margin-top: 20px;
}

.mainButton {
  font-size: medium;
  padding: 10px 20px;
  margin: 0 10px;
  text-align: center;
  background-color: rgb(173, 170, 170);
  cursor: pointer;
  border-radius: 4px;
}
</style>
