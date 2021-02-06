<template>
  <v-container>
    <v-row justify="center" align="center" class="text-center ma-2 pt-8">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" contain height="200" />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-5 font-weight-bold mb-3">
          Vuetify DateTime picker
        </h1>
        <div>
          Small datetime picker package based on vuetify and javascript date
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <v-divider inset></v-divider>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" tile max-width="400" elevation="0">
              <v-card-title class="justify-center">
                <v-icon color="primary darken-2" large left>
                  mdi-earth
                </v-icon>
                <span class="title font-weight-bold">I18n</span>
              </v-card-title>

              <!-- <v-card-text>
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
              </v-card-text> -->
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" tile max-width="400" elevation="0">
              <v-card-title class="justify-center">
                <v-icon color="error darken-2" large left>
                  mdi-cog
                </v-icon>
                <span class="title font-weight-bold">Configurable</span>
              </v-card-title>

              <!-- <v-card-text>
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
              </v-card-text> -->
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" tile max-width="400" elevation="0">
              <v-card-title class="justify-center">
                <v-icon color="success darken-2" large left>
                  mdi-bread-slice
                </v-icon>
                <span class="title font-weight-bold">Simple</span>
              </v-card-title>

              <!-- <v-card-text
                class="justify-center align-center mx-auto text-center"
              >
                Turns out semicolon-less style is easier and safer in TS because
                most gotcha edge cases are type invalid as well.
              </v-card-text> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({}),
};
</script>
