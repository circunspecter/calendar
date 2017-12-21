# Calendar

A calendar building helper. [Documentation and example](https://circunspecter.github.io/calendar/ "Documentation and example")

### Installation

#### Browser

```html
<script src="/path/to/calendar.min.js"></script>
```

[unpkg CDN](https://unpkg.com "unpkg"):

```html
//unpkg.com/@circunspecter/calendar@latest/dist/calendar.min.js
```

#### npm

```shell
npm install @circunspecter/calendar
```

### Usage

```js
let calendar = new Calendar();
```

Some frequent calls:

```js
// Month name
`${calendar.month.getName()} ${calendar.month.getYear()}`

// Previous month
calendar.month.getSibling(-1)

// Next month
calendar.month.getSibling(1).getName()

// Month total days
calendar.month.getLength()

// Loop through month days
calendar.month.getDays().forEach((day) => {
  `Day number: ${day.getNumber()}`
});

// Loop through week days
calendar.week.getDays().forEach((day) => {
  `Day name: ${day}`
});

// Short week day names
calendar.week.getDays('short')
```

Go to the [project page](https://circunspecter.github.io/calendar/ "project page") to see the documentation and a working example.
