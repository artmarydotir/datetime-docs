<template>
  <ExampleCards :hilighterCode="scode">
    <!-- title -->
    <template v-slot:title>
      Example1 - Simple usage, required props:
    </template>
    <!-- description -->
    <template v-slot:description>
      Simple usage of datetime picker oly pass
      <strong> lang </strong> and <strong> placeholder </strong>
      <ul>
        <li>
          <code dir="ltr">
            lang: { type: String, default: 'fa', required: true }
          </code>
        </li>
        <li>
          <code dir="ltr">
            placeholder: { type: String, default: '', required: true }
          </code>
        </li>
      </ul>
    </template>
    <!-- datetime -->
    <template v-slot:datetime>
      <DateTimePicker lang="en" placeholder="select date" />
    </template>
  </ExampleCards>
</template>
<script>
import ExampleCards from '@/components/Example/ExampleCards';
export default {
  data() {
    return {
      scode: `<myDateTime lang="en" placeholder="Select date" />`,
    };
  },
  components: {
    ExampleCards,
    // myDate,
  },
};
</script>
