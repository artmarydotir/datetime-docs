## Installation

Sure your project is Vue project, and has Vuetify as UI framework, then:

```
npm install aasaam-vuetify-datetime

```

## Usage

Add these line into your component:

```
import DateTimePicker from 'aasaam-vuetify-datetime/src/components/DateTimePicker';

export default {
    components: {
        DateTimePicker,
    }
}
```

```
<DateTimePicker lang="en"  :date-time.sync="selectDate" placeholder="Select date" />

```
