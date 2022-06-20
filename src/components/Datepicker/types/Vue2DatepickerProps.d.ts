export interface Vue2DatePickerProps {
  type?: 'date' | 'datetime' | 'year' | 'month' | 'time' | 'week';
  range?: boolean;
  format?: TokenString;
  formatter?: object;
  valueType?: 'date' | 'timestamp' | 'format' | TokenString;
  defaultValue?: Date;
  lang?: object;
  placeholder?: string;
  editable?: boolean;
  clearable?: boolean;
  confirm?: boolean;
  confirmText?: string;
  multiple?: boolean;
  disabled?: boolean;
  disabledDate?: (date: Date, currentValue: Date[]) => boolean;
  disabledTime?: (date: Date) => boolean;
  appendToBody?: boolean;
  inline?: boolean;
  inputClass?: string;
  inputAttr?: object;
  open?: boolean;
  defaultPanel?: 'year' | 'month';
  popupStyle?: object;
  popupClasses?: string;
  shortcuts?: Array<{ text: string; onClick: () => Date; }>;
  titleFormat?: TokenString;
  partialUpdate?: boolean;
  rangeSeparator?: string;
  showWeekNumber?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  hourOptions?: number[];
  minuteOptions?: number[];
  secondOptions?: number[];
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
  use12h?: boolean;
  showTimeHeader?: boolean;
  timeTitleFormat?: TokenString;
  timePickerOptions?: TimePickerOptions;
  prefixClass?: string;
  scrollDuration?: number;
}

// https://github.com/mengxiong10/vue2-datepicker#token
export type TokenString = string;

export type TimePickerOptions = {
  start: string;
  step: string;
  end: string;
  format: string;
}