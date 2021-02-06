<template>
  <div>
    <ExampleCards :hilighterCode="scode" title="Template">
      <!-- title -->
      <template v-slot:title>
        Example4 - Minimum and Maximum Datetime:
      </template>
      <!-- description -->
      <template v-slot:description>
        <ul>
          <li>
            <code dir="ltr">
              min: { type: Date, default: undefined, required: false }
            </code>
          </li>
          <li>
            <code>
              max: { type: Date, default: undefined, required: false }
            </code>
          </li>
        </ul>
      </template>
      <!-- datetime -->
      <template v-slot:datetime>
        <DateTimePicker
          lang="en"
          :date-time.sync="setDatetime"
          :min="setMinimun"
          :max="setMaximum"
          placeholder="Select datetime"
        />
      </template>
    </ExampleCards>
    <ExampleCards :hilighterCode="scode2" title="Js"> </ExampleCards>
  </div>
</template>
<script>
import ExampleCards from '@/components/Example/ExampleCards';
export default {
  data() {
    return {
      setMinimun: new Date(),
      setMaximum: new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000),
      setDatetime: undefined,
      scode: `<myDateTime
    :date-time.sync="setDatetime"
    lang="en"
    :min="setMinimun"
    :max="setMaximum"
    placeholder="Select datetime"
  />`,
      scode2: `// ..
    data: () => ({
      setDatetime: undefined,
      setMinimun: new Date(),
      setMaximum: new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000),
    })
  // ..`,
    };
  },
  components: {
    ExampleCards,
    // myDate,
  },
};
</script>
