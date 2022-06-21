/**
 * @param {Date} date
 * @param {Object} [options]
 * @param {(number|undefined)} [options.year]
 * @param {(number|undefined)} [options.month]
 * @param {(number|undefined)} [options.date]
 * @param {(number|undefined)} [options.hours]
 * @param {(number|undefined)} [options.minutes]
 * @param {(number|undefined)} [options.seconds]
 * @param {(number|undefined)} [options.milliseconds]
 * @returns {Date}
 */
export const createDate = (date, options) => {
  return new Date(
    options?.year ?? date.getFullYear(),
    options?.month ?? date.getMonth(),
    options?.date ?? date.getDate(),
    options?.hours ?? date.getHours(),
    options?.minutes ?? date.getMinutes(),
    options?.seconds ?? date.getSeconds(),
    options?.milliseconds ?? date.getMilliseconds()
  );
};