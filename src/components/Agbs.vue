<script>
export default {
  name: 'Agbs'
}
</script>

<template>
  <div>
    <header>
      <h1>{{ $t('gtcsHeadline') }}</h1>
    </header>

    <section class="section">
      <h2>1. {{ $t('scope') }} </h2>
      <p>
       {{ $t('scopeText') }}
      </p>
    </section>

    <section class="section">
      <h2>2. {{ $t('⁠useOfTheWebsite') }} </h2>
      <p>
       {{ $t('⁠useOfTheWebsiteText') }}
      </p>
    </section>

    <section class="section">
      <h2>3. {{ $t('⁠openSourceLicense') }} </h2>
      <p>
        {{ $t('openSourceLizenzText') }}
      </p>
    </section>

    <section class="section">
      <h2>4. {{ $t('disclaimer') }} </h2>
      <p>
        {{ $t('disclaimerText') }}
      </p>
    </section>

    <section class="section">
      <h2>5. {{ $t('changesAndAvailability') }} </h2>
      <p>
       {{ $t('changesAndAvailabilityText') }}
      </p>
    </section>

    <section class="section">
      <h2>6. {{ $t('⁠dataProtection') }} </h2>
      <p>
        {{ $t('dataProtectionText') }}
      </p>
    </section>

    <section class="section">
      <h2>7.{{ $t('⁠applicableLaw')}} </h2>
      <p>
        {{ $t('⁠applicablaLawText') }}
      </p>
    </section>
    <div class="action-container">
      <button class="mainButton" @click="">{{ $t('solve') }}</button>
    </div>
  </div>
</template>

<style>

h2{
  font-size: medium;
}

h1{
  font-size: large;
}

.section {
  margin-bottom: 20px;
}

.action-container {
  text-align: center;
  margin-top: 30px;
}

.mainButton {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mainButton:hover {
  background-color: #0056b3;
}
</style>
