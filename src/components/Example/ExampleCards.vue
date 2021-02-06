<template>
  <v-card tile elevation="0" color="grey lighten-4">
    <v-card-title class="font-weight-bold mb-4 pt-6" v-if="$slots.title">
      <slot name="title"></slot>
    </v-card-title>

    <v-card-text class="body-1">
      <p v-if="$slots.description">
        <slot name="description"></slot>
      </p>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <Highlighter :code="hilighterCode" :title="title"> </Highlighter>
        </v-col>
        <v-col cols="12" md="6">
          <slot name="datetime"></slot>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Highlighter from '@/components/Highlighter.vue';

export default {
  name: 'ExampleCards',
  components: {
    Highlighter,
  },
  props: {
    hilighterCode: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
