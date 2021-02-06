## Installation

Sure your project is Vue project, and has Vuetify as UI framework, then:

```
npm install aasaam-vuetify-datetime

```

## Usage

Add these line into your component:

```
import RangeDateTimePicker from 'aasaam-vuetify-datetime/src/components/RangeDateTimePicker';

export default {
    components: {
        RangeDateTimePicker
    }
}
```

```
<RangeDateTimePicker lang="en" :fromDate.sync="fromDate" :toDate.sync="toDate"  />

```
