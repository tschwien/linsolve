<script>
import 'mathlive';

export default {
    name: 'OptimizationProblemInput',
    data() {
        return {
            selectedOptimization: 'minimization' // Standardmäßig auf 'minimization' gesetzt
        };
    },
    methods: {
        selectOptimization(option) {
            this.selectedOptimization = option;
        },
        addConstraint() {
            const constraintField = document.createElement('math-field');
            constraintField.classList.add('constraint');
            document.getElementById('constraintContainer').appendChild(constraintField);
        }
    }
};
</script>

<template>
    <div class="inputContainer">
        <div class="firstRow">
            <button 
                class="selectionOptimization" 
                :class="{ selected: selectedOptimization === 'minimization' }"
                @click="selectOptimization('minimization')">
                {{ $t('minimization') }}
            </button>
            <button 
                class="selectionOptimization" 
                :class="{ selected: selectedOptimization === 'maximization' }"
                @click="selectOptimization('maximization')">
                {{ $t('maximization') }}
            </button>
        </div>

        <div class="conditionContainer">
            <math-field class="condition"></math-field>
        </div>

        <div id="constraintContainer">
            <math-field class="constraint"></math-field>
            <math-field class="constraint"></math-field>
            <math-field class="constraint"></math-field>
        </div>

        <div class="lastRow">
            <button class="mainButton" @click="addConstraint()">{{ $t('addConstraint') }}</button>
            <button class="mainButton">{{ $t('solve') }}</button>
        </div>
    </div>
</template>

<style>
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
