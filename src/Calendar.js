import Month from './Month';
import Week from './Week';

export default class Calendar {
  constructor(config, date = new Date()) {
    this.date = new Date(date);
    this.config = Object.assign({
      // Month defaults handled by Month class.
      month: {},
      // Week defaults handled by Week class.
      week: {}
    }, config);

    this.week = new Week(this.config.week, this.config.weekStartDay);
    this.month = new Month(this.config.month, this.week, this.date);
  }

  /**
   * Set month.
   * @param {Date} date Selected month.
   */
  setDate(date) {
    this.date = this.month.date = date;
  }
}
