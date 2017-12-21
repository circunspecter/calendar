export default class Week {
  constructor(config) {
    this.config = Object.assign({
      startDay: 0,
      namesType: 'large',
      names: {
        large: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        short: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
        mini: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
      }
    }, config);
  }

  /**
   * Return week start day.
   * @return {number}
   */
  getStartDay() {
    let day = parseInt(this.config.startDay, 10);
    if (isNaN(day) || day < 0 || day > 6) {
      throw new Error('Week start day must be a number between 0 and 6.');
    }
    return day;
  }

  /**
   * Return week days names starting from week start day.
   * @param {string} type Configured names key.
   * @return {array} Name of days.
   */
  getDays(type = this.config.namesType) {
    let names = this.config.names[type];
    if (!names) {
      throw new Error(`'${type}' is not a valid Week name type.`);
    }
    return names.slice(this.getStartDay()).concat(names.slice(0, this.getStartDay()));
  }
}
