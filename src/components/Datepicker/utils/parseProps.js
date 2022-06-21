import { VUE2_DATEPICKER_EVENTS, VUE2_DATEPICKER_PROPS } from '../config.js';

/**
 * @typedef {import('../types').Datepicker.Props} DatepickerProps
 * @typedef {import('../types').Vue2Datepicker.Events} Vue2DatePickerEvents
 * @typedef {import('../types').Vue2Datepicker.Props} Vue2DatePickerProps
 */

/**
 * @param {DatepickerProps} props
 * @returns {{props: Vue2DatePickerProps, events: Vue2DatePickerEvents}}
 */
export function parseProps(props) {
  const entries = Object.entries(props);
  /** @type {Vue2DatePickerEvents} */
  const events = {};
  /** @type {Vue2DatePickerProps} */
  const props_ = {};

  for ( const [propKey, propValue] of entries ) {
    const eventExecArray = /^on(.+)$/.exec(propKey);

    if ( eventExecArray && VUE2_DATEPICKER_EVENTS.includes(eventExecArray[1]) ) {
      const fnName = eventExecArray[1];
      const keyWithoutPrefix = `${ fnName[0].toLowerCase() }${ fnName.substring(1) }`;
      events[keyWithoutPrefix] = propValue;
    }

    if ( !eventExecArray && VUE2_DATEPICKER_PROPS.includes(propKey) ) {
      props_[propKey] = propValue;
    }
  }

  return {
    props: props_,
    events
  };
}