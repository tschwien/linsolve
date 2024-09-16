<script>
export default{
    name: 'AboutUs'
}
</script>
<template>
    <div>
       <h1>
           {{ $t('aboutUsHeadline') }}
        </h1>
        <br>
        <p>   {{$t('aboutUsText')}} 💻
        </p>
        <div class="Home">
          <br>
          <button class="mainButton" @click="optimizationStore.addConstraint()">{{ $t('addConstraint') }}</button>
         
      </div>
    </div>
</template>
<style scoped>
p {
  font-size: 18px;
  color: #333;
}
</style>