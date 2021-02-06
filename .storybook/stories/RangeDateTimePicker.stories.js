import { text, boolean, object, select } from '@storybook/addon-knobs';
import RangeDateTimePicker from 'aasaam-vuetify-datetime/src/components/RangeDateTimePicker';
import Note from './RangeDateTimePicker.md';

export const RangeDateTime = () => ({
  components: {
    RangeDateTimePicker,
  },
  props: {
    f: {
      type: Date,
      default: object('from', undefined),
      required: false,
    },
    t: {
      type: Date,
      default: object('to', undefined),
      required: false,
    },
    fromMin: {
      type: Date,
      default: select(
        'fromMin',
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
    toMax: {
      type: Date,
      default: select(
        'toMax',
        {
          undefined: undefined,
          '8 days later': new Date(
            new Date().getTime() + 8 * 24 * 60 * 60 * 1000,
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
    column: {
      type: Boolean,
      default: boolean('column', true),
      required: false,
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
      fromDate: undefined,
      toDate: undefined,
    };
  },
  template: `<RangeDateTimePicker
  :lang="lang"
  :f.sync="fromDate"
  :t.sync="toDate"
  :from-min="fromMin"
  :to-max="toMax"
  :column="column"
  :dense="dense"
  :hidedetail="hidedetail"
    />`,
});

export default {
  title: 'RangeDateTime',
  parameters: {
    notes: Note,
  },
};
