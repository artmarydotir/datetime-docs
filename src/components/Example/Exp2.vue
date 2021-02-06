<template>
  <ExampleCards :hilighterCode="scode">
    <!-- title -->
    <template v-slot:title>
      Example2 - I18n:
    </template>
    <!-- description -->
    <template v-slot:description>
      Changing the <strong> lang </strong> props value
      <v-row class="mt-3">
        <v-col cols="12" md="5">
          <v-select
            :items="items"
            label="change language"
            v-model="setLang"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <ul>
        <li>
          <code dir="ltr">
            lang: { type: String, default: 'fa', required: true }
          </code>
        </li>
      </ul>
    </template>
    <!-- datetime -->
    <template v-slot:datetime>
      <DateTimePicker :lang="setNewLang" placeholder="select date" />
    </template>
  </ExampleCards>
</template>
<script>
// import myDate from "aasaam-vuetify-datetime-picker/src/components/DateTimePicker";
import ExampleCards from '@/components/Example/ExampleCards';
export default {
  data() {
    return {
      scode: `<myDateTime lang="fa" placeholder="Select date" />`,
      items: ['en', 'fa', 'ar'],
      setLang: 'fa',
      setNewLang: 'fa',
    };
  },
  watch: {
    setLang(a) {
      this.setNewLang = '';
      this.setNewLang = a;
    },
  },
  components: {
    ExampleCards,
    // myDate,
  },
};
</script>
