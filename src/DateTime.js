export default class DateTime {
  constructor(date = new Date()) {
    this.date = new Date(date);
  }

  /**
   * Get milliseconds elapsed since 1 January 1970 00:00:00 UTC.
   * @return {number}
   */
  getTime() {
    return this.date.getTime();
  }

  /**
   * Get month. 0 for january ... 11 for december.
   * @return {number}
   */
  getMonth() {
    return this.date.getMonth();
  }

  /**
   * Get year.
   * @return {number}
   */
  getYear() {
    return this.date.getFullYear();
  }

  /**
   * Set day.
   * @param {number} day Day to be established.
   * @return {DateTime}
   */
  setDay(day) {
    this.date = new Date(this.date.setDate(day));
    return this;
  }
}
