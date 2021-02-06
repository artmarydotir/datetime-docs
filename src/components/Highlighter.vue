<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="12" class="pa-0 ma-0">
      <h3 v-if="title">
        {{ title }}
      </h3>
      <template v-if="code">
        <code-highlight language="javascript">
          {{ code }}
        </code-highlight>
      </template>
      <template v-else>
        <code-highlight language="javascript">
          <slot name="code"></slot>
        </code-highlight>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue';
import 'vue-code-highlight/themes/duotone-sea.css';
import 'vue-code-highlight/themes/window.css';
export default {
  name: 'Highlighter',
  components: {
    CodeHighlight,
  },
  props: {
    code: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.language-javascript {
  max-width: 100% !important;
  width: 100% !important;
}
</style>
