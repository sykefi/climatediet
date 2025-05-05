<template>
  <div id="app-content" :class="{ 'with-background': $route.path != '/' }">
    <BaseHeader id="header" />
    <BaseNavigation
      id="navigation"
      :is-visible="mobileMenuVisible"
      @link-clicked="mobileMenuVisible = false"
    />
    <div id="picture-padder" v-if="$route.path == '/'">
      <img
        :src="backgroundUrl"
        alt="site background graphic depicting different aspects of the calculator"
      />
    </div>
    <main id="content" aria-label="active tab">
      <div
        id="base-data-notification"
        v-if="$route.path != '/' && !baseDataStore.submitted"
      >
        {{ $t('$baseDataNotSubmittedNotification') }}
      </div>
      <!-- Selected tab content -->
      <router-view />
    </main>
    <BaseFooter id="footer" ref="footer" />
    <button
      id="menu-button"
      @click="mobileMenuVisible = !mobileMenuVisible"
      aria-label="mobile menu button"
    >
      <div />
      <div />
      <div />
    </button>

    <div id="busy-indicator" v-if="globalStateStore.busy">
      <div class="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
      {{ $t('$busy') }}
    </div>
    <div id="global-error" v-if="globalError" aria-label="error display">
      <span id="error-text">{{ globalError }}</span>
      <button id="clear-error" @click="clearError">
        {{ $t('$clearError') }}
      </button>
    </div>
    <LoginDialog v-if="globalStateStore.loginVisible" />
    <CreateGroupCodeDialog v-if="globalStateStore.createGroupCodeVisible" />
    <div
      id="mobile-menu-overlay"
      v-if="mobileMenuVisible"
      @click="mobileMenuVisible = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseFooter from '@/components/BaseFooter.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseNavigation from '@/components/BaseNavigation.vue'
import LoginDialog from '@/views/common/LoginDialog.vue'
import CreateGroupCodeDialog from '@/views/start/CreateGroupCodeDialog.vue'
import backgroundUrl from '@/assets/images/background.png'
import smallBackgroundUrl from '@/assets/images/background_small.png'
import { useGlobalStateStore } from './stores/global/store'
import { mapStores } from 'pinia'
import { useBaseDataStore } from './stores/startView/store'

export default defineComponent({
  components: {
    BaseHeader,
    BaseNavigation,
    BaseFooter,
    LoginDialog,
    CreateGroupCodeDialog,
  },
  computed: {
    ...mapStores(useGlobalStateStore, useBaseDataStore),
    globalError(): string | null {
      return this.globalStateStore.error
    },
  },
  data() {
    return {
      mobileMenuVisible: false,
      backgroundUrl:
        window.innerWidth > 800 ? backgroundUrl : smallBackgroundUrl,
    }
  },
  methods: {
    clearError() {
      this.globalStateStore.setError(null)
    },
  },
})
</script>

<style lang="scss">
// THESE STYLES ARE GLOBAL
@use '@/assets/styles/variables.scss' as *;
@use '@/assets/styles/font_faces.scss' as *;
@use '@/assets/styles/custom_inputs.scss' as *;

body {
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-dark;
  background-color: $background-light;
  overflow-x: hidden;
}

.calc-form .action-wrapper {
  text-align: center;
}

a {
  text-decoration: none;
  color: $link-light;
  font-weight: bold;
  &:visited {
    color: $link-light;
    font-weight: normal;
  }
  &:hover {
    color: $link-dark;
  }
}

table,
th,
td {
  border: 1px solid black;
}

.separator {
  display: inline-block;
  background: $line-light;
  border: 1px solid $line-light;
  height: 2em;
  margin: 0px 4px -10px 8px;
}

*[hidden='hidden'],
*.hidden {
  display: none;
}

*.invisible {
  visibility: hidden;
}

.field-unit {
  font-size: $font-size-s;
}

.inner-label {
  width: 11em;
}

.wrapped-text {
  white-space: pre-line;
}

.full-page-text {
  padding: 2em;
}

label,
h3 {
  user-select: none;
}

.reset-button {
  display: block;
  margin-left: 0;
  margin-top: 2em;
  margin-bottom: 1em;
  width: fit-content;
}

@media (min-width: $window-width-large-low) {
  body {
    background-size: contain;
  }
}
</style>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

#picture-padder {
  max-width: 100%; //IE hacks
  height: 100%;
  margin: 0 auto;
  & img {
    max-width: 100%;
  }
}

#busy-indicator {
  position: fixed;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  line-height: 3em;
  width: 200px;
  border: 2px solid $highlight-dark;
  border-radius: 20px;
  text-align: center;
  color: $highlight-dark;
  background: white;
  z-index: 999;
}

#navigation {
  &.hidden {
    display: block; //never hide on IE
  }
}

#content {
  background: white;
  width: 100%;
  max-width: $window-width-small-low;
  display: block;
  margin: 0 auto;
  min-height: 85vh; //IE hack
}

#global-error {
  background: red;
  color: white;
  text-align: center;
  padding: 0.5em;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 997;
  & #error-text {
    display: block;
    padding: 0 2em;
  }

  & #clear-error {
    height: 2em;
  }
}

#menu-button {
  display: none;
}

#mobile-menu-overlay {
  background-color: $dialog-background;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#base-data-notification {
  text-align: center;
  color: white;
  padding: 1em;
  background: $notification-background;
}

.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  vertical-align: middle;
  display: inline-block;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: $highlight-dark;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

@media (min-width: $window-width-small-low) {
  #content {
    padding: 8px;
    margin-top: 10px;
  }

  #app-content {
    &.with-background {
      background-image: url('./assets/images/background.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0px 7.2em; //start background after header and nav
    }
  }
}

@supports (display: grid) {
  //older/incompatible browsers fall back to a layout where content does not have the proper height
  #app-content {
    //default mobile layout
    min-height: 100vh;
    display: grid;
    align-items: unset;
    grid-template:
      'head' 60px
      'pict' auto
      'cont' 1fr
      'foot' auto;
  }

  #menu-button {
    display: unset;
    background: $button-primary-background;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: fixed;
    bottom: 85px;
    right: 0;
    z-index: 990;

    & div {
      width: 60%;
      height: 3px;
      background-color: white;
      margin: 3px auto;
    }
  }

  #navigation {
    width: unset; //undo IE hack
    z-index: 991;
    right: 0;
    bottom: 0;
    position: fixed;
    display: inline-grid;
    border: 2px solid $line-light;
    &.hidden {
      display: none;
    }
  }

  #header {
    grid-area: head;
  }

  #content {
    grid-area: cont;
    min-height: unset; //undo IE hack
  }

  #footer {
    grid-area: foot;
  }

  #picture-padder {
    grid-area: pict;
  }

  @media (min-width: $window-width-small-low) {
    #app-content {
      grid-template:
        'head head head' 60px
        'nav  nav  nav' auto
        'pict pict pict' auto
        '.    cont .' 1fr
        'foot foot foot' auto / 1fr minmax(auto, $window-width-small-low) 1fr;
    }
    #navigation {
      grid-area: nav;
      z-index: initial;
      right: initial;
      top: initial;
      position: initial;
      display: initial;
      transform: initial;
      border: none;
      &.hidden {
        //if the screen is wide enough, always show the menu
        display: initial;
      }
    }
    #menu-button {
      display: none;
    }
  }
}
</style>
