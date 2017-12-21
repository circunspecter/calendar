---
layout: default
title: Calendar
meta_description: "Calendar: Calendar class"
prev_page_title: Init
prev_page_path:
next_page_title: Month
next_page_path: month/
---

#### constructor <code>Object: config, Date: date</code>

{: .list .indent}
- <code>config</code>: optional. Calendar config.
- <code>date</code>: optional. Start date.

Default config:

```js
config = {
  week: {
    startDay: 0,
    namesType: 'large',
    names: {
      large: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      short: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
      mini:  ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
    }
  },
  month: {
    namesType: 'large',
    names: {
      large: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      short: [
        'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
        'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
      ]
    }
  }
}
```

### Properties

#### date <span>Date</span>

Current date.

#### config <span>Object</span>

Current configuration.

#### week <span>Week</span>

Week instance.

#### month <span>Month</span>

Month instance.

### Methods

#### setDate <code>Date: date</code>

Set calendar date.

{: .list .indent}
- <code>date</code>: new calendar date.
