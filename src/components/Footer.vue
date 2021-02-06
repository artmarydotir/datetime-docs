<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :href="icon.link"
          target="_blank"
          :key="icon.title"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>
          {{ $t('head.title') }}
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        {
          title: 'npm',
          link: 'https://www.npmjs.com/package/aasaam-vuetify-datetime',
          icon: 'mdi-npm',
        },
        {
          title: 'github',
          link: 'https://github.com/artmarydotir/aasaam-vuetify-datetime',
          icon: 'mdi-github',
        },
        {
          title: 'website',
          link: 'https://aasaam.com/',
          icon: 'mdi-domain',
        },
      ],
    };
  },
};
</script>

<style></style>
