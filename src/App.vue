<template>
  <v-app>
    <Navigation ref="drawer" />
    <AppBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import AppBar from '@/components/Appbar.vue';
export default {
  name: 'App',
  components: {
    Footer,
    Navigation,
    AppBar,
  },
  data: () => ({
    drawer: true,
    items: [
      {
        title: 'Introduction',
        icon: 'mdi-book-open-blank-variant',
        link: '/introduction',
      },
      { title: 'Installation', icon: 'mdi-iframe', link: '/installation' },
      { title: 'Features', icon: 'mdi-image-edit', link: '/features' },
      {
        title: 'Example',
        icon: 'mdi-view-dashboard-outline',
        link: '/examples',
      },
    ],
  }),
};
</script>
