import { lightFormat }      from 'date-fns';
import { REGEX, KEY_CODES } from '../config';
import { createDate }       from '@/components/Datepicker/utils/createDate';

/**
 * @param {KeyboardEvent} event
 * @returns {boolean}
 */
const checkIsSpecialKey = (event) => {
  return (
      [
        KEY_CODES.Backspace,
        KEY_CODES.Tab,
        KEY_CODES.Delete,
        KEY_CODES.Enter,
        KEY_CODES.ArrowLeft,
        KEY_CODES.ArrowRight
      ].includes(event.key)
    ) ||
    (
      event.ctrlKey && [
        'a',
        'A'
      ].includes(event.key)
    );
};

/**
 * @returns {Readonly<import('../types').DatepickerHelpers>}
 */
export function createDateHelpers() {
  const datetimeFormat = new window.Intl.DateTimeFormat(
    [],
    { month: 'long', weekday: 'short', day: 'numeric', year: 'numeric' }
  );

  let keyDownInputValue = '';

  const results = {
    handlers: {
      /**
       * @param {InputEvent} event
       * @param {Function} callback
       * @returns {void}
       */
      inputInput(event, callback) {
        if ( !REGEX.INPUT_DATE_PARTIAL.test(event.target.value) ) {
          event.target.value = keyDownInputValue;
        }

        callback?.(event);
      },
      /**
       * @param {KeyboardEvent} event
       * @param {Function} callback
       * @returns {void}
       */
      inputKeydown(event, callback) {
        const isAllowedKey = !!event.key.match(/[\d|.]/),
              isSpecialKey = checkIsSpecialKey(event);

        if ( !(isSpecialKey || isAllowedKey) ) {
          event.preventDefault();
          return;
        }

        keyDownInputValue = event.target.value;
        callback?.(event);
      }
    },
    formatters: {
      /**
       * @param {string} value
       * @returns {string}
       */
      inputValue(value) {
        return value;
      },
      /**
       * @param {Date} date
       * @returns {string}
       */
      stringifyFocus(date) {
        return lightFormat(date, 'd.M.yyyy');
      },
      /**
       * @param {Date} date
       * @returns {string}
       */
      stringify(date) {
        return datetimeFormat.format(date);
      },
      /**
       * @param {string|null} value
       * @returns {Date|null}
       */
      parse(value) {
        if ( !REGEX.INPUT_DATE_STRICT.test(value ?? '') ) {
          return null;
        }

        const [, date, month, year] = REGEX.INPUT_DATE_STRICT.exec(value);

        return createDate(
          new Date(),
          {
            year: parseInt(year, 10),
            month: parseInt(month, 10) - 1,
            date: parseInt(date, 10),
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
          }
        );
      }
    }
  };

  return Object.freeze(results);
}