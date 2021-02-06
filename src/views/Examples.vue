<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Exp1 />
      </v-col>
      <v-col cols="12">
        <Exp2 />
      </v-col>
      <v-col cols="12">
        <Exp3 />
      </v-col>
      <v-col cols="12">
        <Exp4 />
      </v-col>
      <v-col cols="12">
        <Exp5 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Exp1 from '@/components/Example/Exp1';
import Exp2 from '@/components/Example/Exp2';
import Exp3 from '@/components/Example/Exp3';
import Exp4 from '@/components/Example/Exp4';
import Exp5 from '@/components/Example/Exp5';
export default {
  components: {
    Exp1,
    Exp2,
    Exp3,
    Exp4,
    Exp5,
  },
};
</script>
