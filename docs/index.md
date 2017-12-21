---
layout: default
title: Init
meta_description: "A calendar building helper."
next_page_title: Calendar
next_page_path: calendar/
---

<script src="{{ site.baseurl }}/assets/js/calendar.min.js"></script>

A calendar building helper.

### Installation

#### Browser

```html
<script src="/path/to/calendar.min.js"></script>
```

<div markdown="1" class="note">
[unpkg CDN](https://unpkg.com "unpkg"):

```html
//unpkg.com/@circunspecter/calendar@latest/dist/calendar.min.js
```
</div>

#### npm

```shell
npm install @circunspecter/calendar
```

### Usage

Let’s make a calendar! (a simple one, though)

```js
let calendar = new Calendar({
  week: {
    namesType: 'mini'
  }
});
```
<script style="text/javascript">
let calendar = new Calendar({
  week: {
    namesType: 'mini'
  }
});
</script>

We will work with the next template:

``` html
<div class="calendar">
  <div data-month-selector>
    <button type="button" data-action="prev">&lt;</button>
    <span data-current></span>
    <button type="button" data-action="next">&gt;</button>
  </div>
  <div data-grid>
    <div data-week-days></div>
    <div data-month-days></div>
  </div>
</div>
```

The month selector will show the current month and two buttons to go to adjacent ones.

```js
let monthSelector = document.querySelector('[data-month-selector]');

// Prev month
let prevMonth = calendar.month.getSibling(-1);
monthSelector.querySelector('[data-action="prev"]')
.setAttribute('title', `${prevMonth.getName()} ${prevMonth.getYear()}`);

// Next month
let nextMonth = calendar.month.getSibling(1);
monthSelector.querySelector('[data-action="next"]')
.setAttribute('title', `${nextMonth.getName()} ${nextMonth.getYear()}`);

// Current month
monthSelector.querySelector('[data-current]')
.innerHTML = `${calendar.month.getName()} ${calendar.month.getYear()}`;
```

Now, the week days names. In this example we have requested the "mini" type.

```js
let monthDays = document.querySelector('[data-week-days]');
calendar.week.getDays().forEach((day) => {
  monthDays.insertAdjacentHTML('beforeend', `<div>${day}</div>`);
});
```

Month days will follow a similar proc to the previous one, but here we can play a bit more. For this example, we will grey out the days of the adjacent months.

```js
let monthDays = document.querySelector('[data-month-days]');
calendar.month.getDays().forEach((day) => {
  monthDays.insertAdjacentHTML('beforeend', `
  <div data-outer="${(day.getMonth() !== calendar.date.getMonth())}">
    ${day.getNumber()}
  </div>
  `);
});
```

Finally, we will attend to the month change requests.

```js
monthSelector.addEventListener('click', (e) => {
  let target = e.target;
  while (target) {
    if (target.dataset && target.dataset.action) {
      // Get the requested month.
      let diff = (target.dataset.action === 'prev') ? -1 : 1;
      let newMonth = calendar.month.getSibling(diff).date;
      // Set new calendar's month.
      calendar.setDate(newMonth);
      // Render the calendar again.
      // ...
      break;
    }
    target = target.parentNode;
  }
});
```

<div class="calendar">
  <div data-month-selector>
    <button type="button" data-action="prev">&lt;</button>
    <span data-current></span>
    <button type="button" data-action="next">&gt;</button>
  </div>
  <div data-grid>
    <div data-week-days></div>
    <div data-month-days></div>
  </div>
</div>

<script style="text/javascript">
buildCalendar(calendar);
</script>

Well, that's it :)

You can take a look to the classes and check out what they offer: [Calendar]({{ site.baseurl }}/calendar/ "Calendar"), [Month]({{ site.baseurl }}/month/ "Month"), [Week]({{ site.baseurl }}/week/ "Week"), [Day]({{ site.baseurl }}/day/ "Day") and [DateTime]({{ site.baseurl }}/datetime/ "DateTime").
