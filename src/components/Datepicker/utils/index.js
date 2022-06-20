/**
 * @param {import('../types').DatepickerProps} props
 * @returns {{props: import('../types').Vue2DatePickerProps, events: import('../types').Vue2DatePickerEvents}}
 */
export function parseProps(props) {
  const entries = Object.entries(props);
  /**
   * @type {import('../types').Vue2DatePickerEvents}
   */
  const events = {};
  /**
   * @type {import('../types').Vue2DatePickerProps}
   */
  const props_ = {};

  for ( const [key, value] of entries ) {
    const execArray = /^on(.+)$/.exec(key);

    if ( execArray ) {
      const fnName = execArray[1];
      const keyWithoutPrefix = `${ fnName[0].toLowerCase() }${ fnName.substring(1) }`;
      events[keyWithoutPrefix] = value;
    } else {
      props_[key] = value;
    }
  }

  return {
    props: props_,
    events
  };
}