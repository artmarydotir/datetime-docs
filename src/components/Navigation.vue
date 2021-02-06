<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item>
        <v-btn icon to="/">
          <v-avatar size="48px">
            <img src="../../node_modules/@aasaam/information/logo/aasaam.png" />
          </v-avatar>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            DateTime Picker
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
