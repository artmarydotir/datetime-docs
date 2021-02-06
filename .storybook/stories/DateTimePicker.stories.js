import { text, boolean, object, select } from '@storybook/addon-knobs';
import DateTimePicker from 'aasaam-vuetify-datetime/src/components/DateTimePicker.vue';
import Note from './DateTimePicker.md';

export default {
  title: 'DateTimePicker',
  parameters: {
    notes: Note,
  },
};
export const DateTime = () => ({
  components: {
    DateTimePicker,
  },
  props: {
    dateTime: {
      type: Date,
      default: object('dateTime', undefined),
      required: false,
    },
    min: {
      type: Date,
      default: select(
        'min',
        {
          undefined: undefined,
          '5 days before': new Date(
            new Date().getTime() - 5 * 24 * 60 * 60 * 1000,
          ),
          '1 month before': new Date().setMonth(-1),
          '1 year before': new Date(
            new Date().setFullYear(new Date().getFullYear() - 1),
          ),
        },
        undefined,
      ),
      required: false,
    },
    max: {
      type: Date,
      default: select(
        'max',
        {
          undefined: undefined,
          '8 days later': new Date(
            new Date().getTime() + 9 * 24 * 60 * 60 * 1000,
          ),
          '2 month later': new Date().setMonth(3),
          '1 year later': new Date(
            new Date().setFullYear(new Date().getFullYear() + 1),
          ),
        },
        undefined,
      ),
      required: false,
    },
    lang: {
      type: String,
      default: select(
        'language',
        {
          fa: 'fa',
          en: 'en',
        },
        'en',
      ),
      required: true,
    },
    icon: {
      type: String,
      default: text('icon', 'mdi-calendar'),
      required: false,
    },
    placeholder: {
      type: String,
      default: text('placeholder', 'select date'),
      required: true,
    },
    dense: {
      type: Boolean,
      default: boolean('dense', false),
      required: false,
    },
    hidedetail: {
      type: Boolean,
      default: boolean('hidedetail', false),
      required: false,
    },
  },
  data() {
    return {
      testD: new Date(),
    };
  },
  template: `<DateTimePicker 
    :date-time.sync="testD"
    :lang="lang"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    :dense="dense"
    :icon="icon"
    :hidedetail="hidedetail"
    />`,
});
