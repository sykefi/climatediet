<template>
  <section
    class="calc-sub-form"
    :class="{ 'calc-sub-form-nested': isNested }"
    v-if="isVisible"
    :aria-label="title"
  >
    <h3
      @click="titleClicked"
      :disabled="!isEnabled ? true : undefined"
      :class="{ active: isActive }"
      :id="id"
    >
      {{ title }}
    </h3>
    <fieldset v-if="isActive" :disabled="!isEnabled ? true : undefined">
      <summary v-if="summary" class="wrapped-text">
        {{ summary }}
      </summary>
      <div v-if="details" class="info">
        {{ details }}
      </div>
      <div class="info" v-if="calcInfoHash">
        <span>{{ $t('$calcInfoText') }}</span>
        <router-link
          :to="{ name: 'calculationInfo', hash: '#' + calcInfoHash }"
        >
          {{ $t('$calcInfoLinkText') }}
        </router-link>
      </div>
      <slot />
    </fieldset>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: false,
    },
    details: {
      type: String,
      required: false,
    },
    isEnabled: {
      type: Boolean,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    isNested: {
      type: Boolean,
      required: false,
    },
    isVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    calcInfoHash: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  methods: {
    titleClicked() {
      if (!this.isActive) {
        this.$emit('titleClicked', this.id)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.calc-sub-form {
  margin: 5px 0;
  & > fieldset {
    padding: 1.5em;
    background: $background-light;
    border: 1px solid $line-light;
    margin: 0;
  }
  & h3 {
    text-align: left;
    padding-left: 1em;
    background: $form-section-inactive;
    line-height: 44px;
    margin: 0;
    font-weight: $semi-bold;
    font-size: $font-size-l;
    border: 1px solid $line-light;
    cursor: pointer;
    position: relative;
    &:before {
      content: '';
      width: 8px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: $disabled;
    }
    &:not([disabled]):before {
      background: $form-section-active;
    }
    &:after {
      content: '+';
      color: $text-semidark;
      position: absolute;
      right: 1em;
    }
    &[disabled] {
      color: $disabled;
    }
    &:not([disabled]).active {
      background: $form-section-active;
      color: $text-light;
    }
    &.active {
      border-bottom: none;
      &:after {
        content: '';
      }
    }
  }
  & summary {
    font-size: $font-size-m;
    display: block;
    text-align: left;
    max-width: $window-width-small-low;
  }
}

.calc-sub-form-nested {
  margin-left: 20px;
  margin-top: 10px;
}

.info {
  font-size: $font-size-m;
  margin-top: 1em;
}
</style>

<style lang="scss">
//global styles related to this component and its children
@import '@/assets/styles/variables.scss';

.section-title {
  font-weight: bold;
  font-size: $font-size-m;
  text-transform: uppercase;
  margin: 0;
  width: $label-min-width;
  word-wrap: break-word;
  display: inline-block;
  &.lower-case {
    font-weight: $semi-bold;
    text-transform: none;
  }
}

.section-title-food {
  font-weight: bold;
  font-size: 1.25em;
  text-transform: uppercase;
  margin-top: 2.5em;
  margin-bottom: 1em;
  word-wrap: break-word;
  display: inline-block;
}
</style>
