import DateTime from './DateTime';
import Day from './Day';

export default class Month extends DateTime {
  constructor(config, week, date = new Date()) {
    super(date);

    this.week = week;
    this.config = Object.assign({
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
    }, config);
  }

  /**
   * Return the days for the month.
   * @return {array} Days collection.
   */
  getDays() {
    let days = [];

    // Previous month days to show.
    let weekDays = [0, 1, 2, 3, 4, 5, 6];
    weekDays = weekDays.slice(this.week.getStartDay())
      .concat(weekDays.slice(0, this.week.getStartDay()));
    let prevMonthDays = weekDays.indexOf(this.getFirstDay().getWeekDay());

    // Days collection.
    let dateFrom = this.getFirstDay().setDay(-prevMonthDays).date;
    Array.apply(null, { length: 42 })
      .map(() => days.push(new Day(dateFrom.setDate(dateFrom.getDate() + 1))));

    return days;
  }

  /**
   * Return the name of the month.
   * @param {string} type Configured names key.
   * @return {string} Name of month.
   */
  getName(type) {
    return this.getNameByIndex(this.getMonth(), type);
  }

  /**
   * Return the name of the specified month.
   * @param {number} index 0 for january ... 11 for december.
   * @param {string} type Configured names key.
   * @return {string} Name of month.
   */
  getNameByIndex(index, type) {
    index = parseInt(index, 10);
    if (isNaN(index) || index < 0 || index > 11) {
      throw new Error('Month index must be a number between 0 and 11.');
    }
    return this.getNames(type)[index];
  }

  /**
   * Return the number of days for the month.
   * @return {number}
   */
  getLength() {
    return this.getLastDay().getNumber();
  }

  /**
   * Return the first day of the month.
   * @return {Day}
   */
  getFirstDay() {
    return new Day(new Date(this.getYear(), this.getMonth(), 1));
  }

  /**
   * Return the last day of the month.
   * @return {Day}
   */
  getLastDay() {
    return new Day(new Date(this.getYear(), this.getMonth() + 1, 0));
  }

  /**
   * Return the month at specified position from the current one.
   * @param {number} diff Sibling distance.
   * @return {Month}
   */
  getSibling(diff) {
    return new Month(this.config, this.week, new Date(this.getYear(), this.getMonth() + diff, 1));
  }

  /**
   * Return names of months.
   * @param {string} type Configured names key.
   * @return {array} Names of months.
   */
  getNames(type = this.config.namesType) {
    let names = this.config.names[type];
    if (!names) {
      throw new Error(`'${type}' is not a valid Month name type.`);
    }
    return names;
  }
}
