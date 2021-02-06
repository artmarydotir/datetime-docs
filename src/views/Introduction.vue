<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-alert outlined color="warning" prominent border="left">
          <div class="title">
            Version
          </div>
          <div>This package work with Vue.js version: <strong> ~2</strong></div>

          <div>And Vuetify version: <strong> ~2</strong></div>
        </v-alert>
      </v-col>
      <!-- 2 -->
      <v-col cols="12">
        <v-card tile elevation="0" color="grey lighten-4">
          <v-card-title class="headline mb-4 pt-6">
            Introduction:
          </v-card-title>

          <v-card-text class="body-1">
            <p>
              This package is a persian datetime picker based on vuetify
              framework.
            </p>
            <p>
              Also it accept all language, But the main purpose of making this
              package was lack of persian datetime picker at vuetify framework.
              Please let us know your suggestions after using it.
            </p>
            <p>
              <strong>Made with love </strong>
              <v-icon small color="red">mdi-heart</v-icon>
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined to="/installation" color="primary">
              Installation
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Home from "@/components/Home.vue";

export default {
  // components: {
  //   Home,
  // },
};
</script>
