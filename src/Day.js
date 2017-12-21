import DateTime from './DateTime';

export default class Day extends DateTime {
  /**
   * Get day number.
   * @return {number}
   */
  getNumber() {
    return this.date.getDate();
  }

  /**
   * Get week day. 0 for sunday ... 6 for saturday.
   * @return {number}
   */
  getWeekDay() {
    return this.date.getDay();
  }

  /**
   * Get the start of the day.
   * @return {Date}
   */
  getStart() {
    return new Date(
      this.getYear(),
      this.getMonth(),
      this.getNumber(),
      0, 0, 0, 0
    );
  }

  /**
   * Get the end of the day.
   * @return {Date}
   */
  getEnd() {
    return new Date(
      this.getYear(),
      this.getMonth(),
      this.getNumber(),
      23, 59, 59, 999
    );
  }
}
