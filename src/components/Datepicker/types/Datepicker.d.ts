import type * as Vue2DatePicker from './Vue2DatePicker';

export type Props =
    Vue2DatePicker.Props &
    { [Property in keyof Vue2DatePicker.Events as `on${ Capitalize<Property> }`]: Vue2DatePicker.Events[Property] };

export type Events = Vue2DatePicker.Events;