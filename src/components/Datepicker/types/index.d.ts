import * as Datepicker     from './Datepicker';
import * as Vue2Datepicker from './Vue2Datepicker';

interface DatepickerHelpers {
  handlers?: {
    inputInput?: (event: InputEvent, callback?: (event: InputEvent) => void) => void;
    inputKeydown?: (event: KeyboardEvent, callback?: (event: KeyboardEvent) => void) => void;
  };

  formatters?: {
    inputValue?: (value: string | null) => string;
    stringifyFocus?: (date: Date) => string;
  } & Vue2Datepicker.FormatterOptions;
}

export {
  Datepicker,
  Vue2Datepicker,
  DatepickerHelpers
};