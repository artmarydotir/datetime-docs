<template>
  <div>
    <ExampleCards :hilighterCode="scode" title="Template">
      <!-- title -->
      <template v-slot:title>
        Example3 - Set Datetime:
      </template>
      <!-- description -->
      <template v-slot:description>
        Set default datetime to
        <code>new Date("2020-04-27 12:00:00")</code>
        <ul>
          <li>
            <code>
              dateTime: { type: Date, default: undefined, required: false }
            </code>
          </li>
        </ul>
      </template>
      <!-- datetime -->
      <template v-slot:datetime>
        <DateTimePicker
          :date-time.sync="changeDatetime"
          lang="fa"
          placeholder="انتخاب زمان"
        />
      </template>
    </ExampleCards>
    <ExampleCards :hilighterCode="scode2" title="Js"> </ExampleCards>
  </div>
</template>
<script>
// import myDate from "aasaam-vuetify-datetime-picker/src/components/DateTimePicker";
import ExampleCards from '@/components/Example/ExampleCards';
export default {
  data() {
    return {
      changeDatetime: new Date('2020-04-27 12:00:00'),
      scode: `<myDateTime
    :date-time.sync="changeDatetime"
    lang="fa"
    placeholder="انتخاب زمان"
  />`,
      scode2: `// ..
    data: () => ({
      changeDatetime: new Date("2020-04-27 12:00:00"),
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
