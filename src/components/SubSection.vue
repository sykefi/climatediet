<template>
  <section class="sub-section">
    <h3 @click="isExpanded = !isExpanded" :class="{ active: isExpanded }">
      {{ $t(title) }}
    </h3>
    <div class="contents" v-if="isExpanded">
      <ul id="actions" v-if="actions">
        <li v-for="action in actions" :key="action">
          <span v-html="action" />
        </li>
      </ul>
      <ul id="links" v-if="links">
        <li v-for="link in links" :key="link.title">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.title }}
          </a>
          <span>{{ link.description }}</span>
        </li>
        <li>
          <a
            :href="$t('$sitra100WaysUrl')"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('$sitra100WaysLinkText') }}
          </a>
        </li>
      </ul>

      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IResultActionLink } from './ResultBase.vue'

export default defineComponent({
  data() {
    return {
      isExpanded: false,
    }
  },
  props: {
    actions: {
      type: Object as PropType<string[]>,
      required: false,
    },
    links: {
      type: Object as PropType<IResultActionLink[]>,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: '$resultActionsTitle',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.sub-section {
  margin: 10px 0;
}

h3 {
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
    background: $form-section-active;
  }
  &:after {
    content: '+';
    position: absolute;
    right: 1em;
  }
  &.active {
    background: $form-section-active;
    color: $text-light;
    border-bottom: none;
    &:after {
      content: '–';
      position: absolute;
      right: 1em;
    }
  }
}

.contents {
  text-align: left;
  background: white;
  border: 1px solid $line-light;
  padding: 10px;
}

#links {
  & a {
    text-transform: capitalize;
    margin-right: 1ch;
  }
}

#actions li {
  margin-bottom: 6px;
}

ul {
  list-style: none;
  text-align: left;
  padding: 0;
}
</style>
