import { Vue2DatePickerProps }  from './Vue2DatePickerProps';
import { Vue2DatePickerEvents } from './Vue2DatePickerEvents';

export type DatepickerProps =
    Vue2DatePickerProps &
    { [Property in keyof Vue2DatePickerEvents as `on${ Capitalize<Property> }`]: Vue2DatePickerEvents[Property] };