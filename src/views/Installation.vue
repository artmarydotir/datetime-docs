<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card tile elevation="0" color="grey lighten-4">
          <v-card-title class="headline mb-4 pt-6">
            Installation:
          </v-card-title>

          <v-card-text class="body-1">
            <p>
              First of all sure to have vuetify install in your project.
              <a
                href="https://vuetifyjs.com/en/getting-started/installation/"
                target="_blank"
              >
                Vuetify documentation
              </a>
            </p>
            <p class="grey--text text--darken-4 text-h6">
              <code> $ npm install aasaam-vuetify-datetime</code>
            </p>

            <p>
              1: you can add globally in <Strong>main.js</Strong> file and then
              only call the DateTimePicker or RangeDateTimePicker.
            </p>
            <Highlighter
              title="Globally"
              code="// main.js
        import i18n from './i18n';
        import vuetify from './plugins/vuetify';
        import 'aasaam-vuetify-datetime' "
            />
            <p class="mt-3">
              2: or add locally in each component.
            </p>

            <Highlighter
              title="Locally :"
              code="<script>
    import DateTimePicker from 'aasaam-vuetify-datetime/src/components/DateTimePicker.vue';
    import RangeDateTimePicker from 'aasaam-vuetify-datetime/src/components/RangeDateTimePicker';

      export default {
          components: {
              DateTimePicker,
              RangeDateTimePicker,
          },
          data: () => ({
              // your data model 
          }),
      }
    </script>"
            />
          </v-card-text>

          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined to="/installation" color="primary">
              Installation
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Highlighter from '@/components/Highlighter.vue';

export default {
  components: {
    Highlighter,
  },
  data() {
    return {
      setupcli: '',
    };
  },
};
</script>
