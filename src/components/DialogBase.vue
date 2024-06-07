<template>
  <div id="wrapper">
    <div id="dialog-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

#wrapper {
  position: fixed;
  background-color: $dialog-background;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: auto;
}

hr {
  border-top: 1px solid $line-light;
}

#dialog-content {
  text-transform: none;
  color: $text-dark;
  min-width: 150px;
  max-width: $window-width-small-low;
  min-height: 100px;
  background: $background-light;
  border: 8px solid $dialog-border-color;
  padding: 1.5em;
  margin: 60px 0px;
  position: relative;
  flex: 1 1 100%;
}
</style>
