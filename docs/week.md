---
layout: default
title: Week
meta_description: "Calendar: Week class"
prev_page_title: Month
prev_page_path: month/
next_page_title: Day
next_page_path: day/
---

#### constructor <code>Object: config</code>

{: .list .indent}
- <code>config</code>: week config.

Default config:

```js
config = {
  startDay: 0,
  namesType: 'large',
  names: {
    large: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    short: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
    mini: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
  }
}
```

### Properties

#### config <span>Object</span>

Current configuration.

### Methods

#### getStartDay <span>Number</span>

Return week start day.

#### getDays <code>String: type</code> <span>Array</span>

Return week days names starting from week start day.

{: .list .indent}
- <code>type</code>: optional. Names type.
