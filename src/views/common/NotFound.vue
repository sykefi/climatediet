<template>
  <div id="not-found">
    <h2>{{ $t('$notFoundTitle') }}</h2>
    <img
      id="error-owl"
      src="@/assets/images/error_owl.png"
      alt="A confused looking owl"
    />
    <p>{{ $t('$notFoundDescription') }}</p>
  </div>
</template>

<style lang="scss" scoped>
#not-found {
  text-align: center;
}
</style>
