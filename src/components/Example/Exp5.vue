<template>
  <div>
    <ExampleCards :hilighterCode="scode" title="Template">
      <!-- title -->
      <template v-slot:title>
        Example5 - Range Datetime:
      </template>
      <!-- description -->
      <template v-slot:description>
        <code>
          import RangeDateTimePicker from
          "/src/components/RangeDateTimePicker.vue";
        </code>
        <br />
        <br />
        <ul>
          <li>
            <code dir="ltr">
              lang: { type: String, default: 'fa', required: true }
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
        </ul>
      </template>
      <!-- datetime -->
      <template v-slot:datetime>
        <RangeDateTimePicker
          lang="en"
          :fromDate.sync="fromDate"
          :toDate.sync="toDate"
          placeholder="Select datetime"
        />
      </template>
    </ExampleCards>
    <ExampleCards :hilighterCode="scode2" title="Js"> </ExampleCards>
  </div>
</template>
<script>
import ExampleCards from "@/components/Example/ExampleCards";
export default {
  data() {
    return {
      fromDate: undefined,
      toDate: undefined,
      scode: `<RangeDateTimePicker
    lang="en"
    placeholder="Select datetime"
  />`,
      scode2: `
    // ..
    import RangeDateTimePicker from
    "aasaam-vuetify-datetime/src/components/RangeDateTimePicker"; 
    // ..
    data: () => ({
      fromDate: undefined,
      toDate: undefined,
    }),
    components: {
      RangeDateTimePicker,
    },

  // ..`,
    };
  },
  components: {
    ExampleCards,
  },
};
</script>
