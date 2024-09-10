<script>
export default{
    name: 'AboutUs'
}
</script>
<template>
    <div>
       <h1>
            Über uns – Das LinSolve-Team
        </h1>
        <p>    

Hi! Wir sind Hannah, Jona, Tom und Nele, ein Team aus Wirtschaftsinformatik-Studierenden der Hochschule Lingen im 5. Semester. Im Rahmen unseres Programmierprojekts haben wir LinSolve entwickelt – die Plattform, die euch bei mathematischen Problemen im Bereich Operations Research (OR) unter die Arme greift.

Unsere Mission? OR-Probleme schnell und einfach lösen – ohne komplizierte Tools. LinSolve hilft euch bei linearen Gleichungen, Optimierungsproblemen und mehr, und das auf verständliche Weise. 

Entwickelt von Studierenden für Studierende, wollen wir den Studienalltag erleichtern. Testet LinSolve und gebt uns Feedback – wir freuen uns drauf!

Euer LinSolve-Team 💻
        </p>
        <div class="Home">
          <button class="mainButton" @click="optimizationStore.addConstraint()">{{ $t('addConstraint') }}</button>
         
      </div>
    </div>
</template>
<style>
p {
  font-size: 18px;
  color: #333;
}
</style>