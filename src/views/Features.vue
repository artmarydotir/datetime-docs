<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card tile elevation="0" color="grey lighten-4">
          <v-card-title class="headline mb-4 pt-6">
            Features:
          </v-card-title>
          <v-card-text class="body-1">
            <ul>
              <li>
                Set minimum datetime
              </li>
              <li>
                Set maximum datetime
              </li>
              <li>
                Select range datetime
              </li>
              <li>
                Set dense of the input
              </li>
              <li>
                Calculate relative time with Intl RelativeTimeFormat
              </li>
              <li>
                Custom colors with standard vuetify theme
              </li>
              <li>
                Set language
              </li>
              <li>
                Set icon
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card tile elevation="0" color="grey lighten-4">
          <v-card-title class="headline mb-4 pt-6">
            All Props:
          </v-card-title>

          <v-card-text class="body-1">
            <ul class="ma-4 pa-0" dir="ltr">
              <li>
                <code>
                  dateTime: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  min: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  max: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  lang: { type: String, default: 'fa', required: true }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  icon: { type: String, default: 'mdi-calendar', required:
                  false}
                </code>
              </li>
              <li>
                <code dir="ltr">
                  placeholder: { type: String, default: '', required: true }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  dense: { type: Boolean, default: false, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  hidedetail: { type: Boolean, default: false, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  fromDate: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  toDate: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  fromMin: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  toMax: { type: Date, default: undefined, required: false }
                </code>
              </li>
              <li>
                <code dir="ltr">
                  column: { type: Boolean, default: false, required: false }
                </code>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      setupcli: "",
    };
  },
  components: {
    // HelloWorld,
  },
};
</script>
