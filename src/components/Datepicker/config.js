import Vue2Datepicker from 'vue2-datepicker';

/* INPUT DATE */
export const REGEX = {
  INPUT_DATE_STRICT: /^(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})$/,
  INPUT_DATE_PARTIAL: /^(\d{0,2})?(\.)?(\d{0,2})?(\.)?(\d{0,4})?$/
};

export const VUE2_DATEPICKER_EVENTS = [
  'input',
  'change',
  'open',
  'close',
  'confirm',
  'clear',
  'inputError',
  'focus',
  'blur',
  'pick',
  'calendarChange',
  'panelChange'
];

export const VUE2_DATEPICKER_PROPS = Object.keys(Vue2Datepicker.props);

export const KEY_CODES = {
  Delete: 'Delete',
  Tab: 'Tab',
  Backspace: 'Backspace',
  Enter: 'Enter',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight'
};