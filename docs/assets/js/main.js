document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('headerMenuToggle').addEventListener('click', () => {
    document.body.classList.toggle('header-menu-open');
  });
});

function buildCalendar(calendar) {
  renderCalendar(calendar, new Date());

  // Month selector handler
  document.querySelector('[data-month-selector]').addEventListener('click', (e) => {
    let target = e.target;
    while (target) {
      if (target.dataset && target.dataset.action) {
        let diff = (target.dataset.action === 'prev') ? -1 : 1;
        renderCalendar(calendar, calendar.month.getSibling(diff).date);
        break;
      }
      target = target.parentNode;
    }
  });
}

function renderCalendar(calendar, date) {
  // Set calendar date
  calendar.setDate(date);

  // Month selector
  var monthSelector = document.querySelector('[data-month-selector]');
  var prevMonth = calendar.month.getSibling(-1);
  monthSelector.querySelector('[data-action="prev"]')
    .setAttribute('title', `${prevMonth.getName()} ${prevMonth.getYear()}`);
  var nextMonth = calendar.month.getSibling(1);
  monthSelector.querySelector('[data-action="next"]')
    .setAttribute('title', `${nextMonth.getName()} ${nextMonth.getYear()}`);
  monthSelector.querySelector('[data-current]')
    .innerHTML = `${calendar.month.getName()} ${calendar.month.getYear()}`;

  // Week days
  var weekDays = document.querySelector('[data-week-days]');
  weekDays.innerHTML = '';
  calendar.week.getDays().forEach((day) => {
    weekDays.insertAdjacentHTML('beforeend', `<div>${day}</div>`);
  });

  // Month days
  var monthDays = document.querySelector('[data-month-days]');
  monthDays.innerHTML = '';
  calendar.month.getDays().forEach((day) => {
    monthDays.insertAdjacentHTML('beforeend', `
    <div data-outer="${(day.getMonth() !== calendar.date.getMonth())}">
      ${day.getNumber()}
    </div>
    `);
  });
}
