---
layout: default
title: Month
subtitle: extends
subtitle_url_text: DateTime
subtitle_url_path: datetime/
meta_description: "Calendar: Month class"
prev_page_title: Calendar
prev_page_path: calendar/
next_page_title: Week
next_page_path: week/
---

#### constructor <code>Object: config, Week: week, Date: date</code>

{: .list .indent}
- <code>config</code>: month config.
- <code>week</code>: Week instance.
- <code>date</code>: optional. Start date.

Default config:

```js
config = {
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
```

### Properties

#### date <span>Date</span>

Current date.

#### config <span>Object</span>

Current configuration.

#### week <span>Week</span>

Week instance.

### Methods

#### getDays <span>Array</span>

Return the days for the month.

#### getName <code>String: type</code> <span>String</span>

Return the name of the month.

{: .list .indent}
- <code>type</code>: optional. Names type.

#### getNameByIndex <code>Number: index, String: type</code> <span>String</span>

Return the name of the specified month.

{: .list .indent}
- <code>index</code>: 0 for january ... 11 for december.
- <code>type</code>: optional. Names type.

#### getLength <span>Number</span>

Return the number of days for the month.

#### getFirstDay <span>Day</span>

Return the first day of the month.

#### getLastDay <span>Day</span>

Return the last day of the month.

#### getSibling <code>Number: diff</code> <span>Month</span>

Return the month at specified position from the current one.

{: .list .indent}
- <code>diff</code>: Sibling distance.

#### getNames <code>String: type</code> <span>Array</span>

Return names of months.

{: .list .indent}
- <code>type</code>: optional. Names type.
