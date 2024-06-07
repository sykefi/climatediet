<template>
  <header aria-label="site header">
    <div id="fill1" />
    <h1>{{ $t('$siteTitle') }}</h1>
    <button
      v-if="!globalStateStore.userId"
      id="login"
      @click="showLogin()"
      class="button-primary"
    >
      {{ $t('$login') }}
    </button>
    <a href="#" id="user-email" @click="logout()" v-else>
      {{ globalStateStore.userEmail }}
      <img src="@/assets/images/icons/logout_white.png" />
    </a>
    <div id="lang">
      <a
        href="#"
        :class="{ current: $i18n.locale == 'fi' }"
        @click="setLanguage('fi')"
      >
        FI
      </a>
      <a
        href="#"
        :class="{ current: $i18n.locale == 'en' }"
        @click="setLanguage('en')"
      >
        EN
      </a>
      <a
        href="#"
        :class="{ current: $i18n.locale == 'sv' }"
        @click="setLanguage('sv')"
      >
        SV
      </a>
    </div>
    <div id="fill2" />
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

header {
  width: 100%;
  height: $header-height;
  background: $header-background;
  color: $text-light;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

h1 {
  text-align: center;
  display: inline-block;
  flex-grow: 1;
  font-size: $font-size-l;
}

a {
  margin: 6px;
  color: white;
  font-size: $font-size-s;
  text-decoration: underline;
  &.current {
    font-weight: bold;
    text-decoration: none;
    opacity: 0.5;
    cursor: default;
  }
  &:active {
    text-decoration: none;
    outline: 0;
  }
  &:visited {
    color: white;
  }
  &:focus {
    text-decoration: none;
    outline: 0;
  }
}

#user-email {
  text-transform: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  img {
    max-height: 1.5em;
  }
}

#login {
  height: 2em;
  padding: 0;
  font-size: $font-size-s;
  display: none;
}

#lang {
  display: none;
}

@media (min-width: $window-width-small-low) {
  #fill1,
  #fill2 {
    flex-grow: 1;
  }

  #login,
  #lang {
    display: block;
  }

  h1 {
    margin: 0 1em;
    text-align: left;
    white-space: nowrap;
  }
}

@supports (display: grid) {
  header {
    display: grid;
    grid-template: 'title' 60px / auto;
  }
  @media (min-width: $window-width-small-low) {
    header {
      grid-template: '. title login lang .' 60px / 1fr minmax(auto, 500px) auto 100px 1fr;
    }
  }
  h1 {
    grid-area: title;
  }
  #login {
    grid-area: login;
  }
  #social {
    grid-area: social;
  }
  #lang {
    grid-area: lang;
  }
}
</style>

<script lang="ts">
import { useGlobalStateStore } from '@/stores/global/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useGlobalStateStore),
  },
  methods: {
    logout() {
      this.globalStateStore.resetAllData()
    },
    setLanguage(tag: string) {
      this.$i18n.locale = tag
    },
    showLogin() {
      this.globalStateStore.setLoginVisible(true)
    },
  },
})
</script>
