<script>
</script>
<template>
<div>
    <p>Mathematische Lösung: </p>

    <hr />

    <p>Graphische Lösung: </p>

    <div class="New_operation">
          <button class="mainButton" @click="optimizationStore.addConstraint()">{{ $t('addConstraint') }}</button>
         
      </div>
</div> 

</template>
<style>
p {
  font-size: 18px;
  color: #333;
}
hr {
  margin: 20px 0;
  border: none;
  border-top: 2px solid #000;
}
</style>