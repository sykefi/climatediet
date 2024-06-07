<template>
  <nav aria-label="site navigation" :class="{ hidden: !isVisible }">
    <a
      v-if="!globalStateStore.userId"
      href="#"
      @click="showLogin()"
      id="mobile-menu-login"
    >
      {{ $t('$login') }}
    </a>
    <a v-else href="#" @click="logout()" id="mobile-menu-logout">
      {{ globalStateStore.userEmail }}
      <img src="@/assets/images/icons/logout_blue.png" />
    </a>
    <router-link
      to="/"
      @click="$emit('link-clicked')"
      :class="{
        ready: baseDataSubmitted,
        'router-link-exact-active': $route.fullPath === '/',
      }"
    >
      {{ $t('$baseData') }}
    </router-link>
    <router-link
      to="/housing"
      @click="$emit('link-clicked')"
      :class="{
        ready: housingStore.submitted,
        disabled: !baseDataSubmitted,
      }"
    >
      {{ $t('$housing') }}
    </router-link>
    <router-link
      to="/food"
      @click="$emit('link-clicked')"
      :class="{
        ready: foodStore.submitted,
        disabled: !baseDataSubmitted,
      }"
    >
      {{ $t('$food') }}
    </router-link>
    <router-link
      to="/transport"
      @click="$emit('link-clicked')"
      :class="{
        ready: transportStore.submitted,
        disabled: !baseDataSubmitted,
      }"
    >
      {{ $t('$transport') }}
    </router-link>
    <router-link
      to="/consumption"
      @click="$emit('link-clicked')"
      :class="{
        ready: consumptionStore.submitted,
        disabled: !baseDataSubmitted,
      }"
    >
      {{ $t('$consumption') }}
    </router-link>
    <router-link
      to="/waste"
      @click="$emit('link-clicked')"
      :class="{
        ready: wasteStore.submitted,
        disabled: !baseDataSubmitted,
      }"
    >
      {{ $t('$waste') }}
    </router-link>
    <router-link
      to="/results"
      @click="$emit('link-clicked')"
      :class="{ disabled: !baseDataSubmitted }"
    >
      {{ $t('$results') }}
    </router-link>
    <router-link
      to="actions"
      @click="$emit('link-clicked')"
      v-if="hasAnySubmitted"
    >
      {{ $t('$actionsOverview') }}
    </router-link>
    <div id="mobile-menu-language">
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
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

nav {
  background: white;
  text-align: center;
}
a {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  font-weight: $semi-bold;
  font-size: $font-size-m;
  &.router-link-exact-active {
    color: $highlight-dark;
    border-color: $highlight-dark;
    border-bottom: 4px solid;
    line-height: 16px;
  }
  &.ready {
    color: $text-good;
    border-color: $text-good;
    &:before {
      content: '✓';
      margin-right: 0.2em;
    }
  }
  &.disabled {
    color: $disabled;
  }
}

#mobile-menu-login,
#mobile-menu-logout {
  border-bottom: 2px solid $line-light;
}

#mobile-menu-logout {
  text-transform: none;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  img {
    max-height: 1.5em;
  }
}

#mobile-menu-language {
  border-top: 2px solid $line-light;

  & a {
    color: inherit;
    &.current {
      color: $disabled;
      cursor: default;
      &:before {
        content: '✓';
        color: $text-good;
      }
    }
  }
}

@media (min-width: $window-width-small-low) {
  //hide mobile menu items
  #mobile-menu-login,
  #mobile-menu-logout,
  #mobile-menu-language {
    display: none;
  }
}
</style>

<script lang="ts">
import { useConsumptionStore } from '@/stores/consumption/store'
import { useFoodStore } from '@/stores/food/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { useHousingStore } from '@/stores/housing/store'
import { useBaseDataStore } from '@/stores/startView/store'
import { useTransportStore } from '@/stores/transport/store'
import { useWasteStore } from '@/stores/waste/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(
      useGlobalStateStore,
      useBaseDataStore,
      useHousingStore,
      useFoodStore,
      useTransportStore,
      useConsumptionStore,
      useWasteStore
    ),
    baseDataSubmitted(): boolean {
      return this.baseDataStore.submitted
    },
    hasAnySubmitted(): boolean {
      return (
        this.housingStore.submitted ||
        this.foodStore.submitted ||
        this.transportStore.submitted ||
        this.consumptionStore.submitted ||
        this.wasteStore.submitted
      )
    },
  },
  methods: {
    logout() {
      this.$emit('link-clicked')
      this.globalStateStore.resetAllData()
    },
    setLanguage(tag: string) {
      this.$i18n.locale = tag
      this.$emit('link-clicked')
    },
    showLogin() {
      this.$emit('link-clicked')
      this.globalStateStore.setLoginVisible(true)
    },
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
