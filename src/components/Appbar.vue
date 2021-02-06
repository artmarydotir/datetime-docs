<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      {{ $t('headTitle') }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      icon
      href="https://github.com/artmarydotir/aasaam-vuetify-datetime"
      target="_blank"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>
