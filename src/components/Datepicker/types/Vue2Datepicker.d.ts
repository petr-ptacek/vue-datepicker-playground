export interface Props {
  type?: 'date' | 'datetime' | 'year' | 'month' | 'time' | 'week';
  range?: boolean;
  format?: TokenString;
  formatter?: FormatterOptions;
  valueType?: 'date' | 'timestamp' | 'format' | TokenString;
  defaultValue?: Date;
  lang?: object | string;
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

export type FormatterOptions = {
  stringify?: (date: Date) => string;
  parse?: (value: string | null) => Date | null;
  getWeek?: (date: Date) => number;
}

export type TimePickerOptions = {
  start: string;
  step: string;
  end: string;
  format: string;
}

export interface Events {
  input?: (value: Date) => void;
  change?: (value: Date, type?: 'date' | 'hour' | 'minute' | 'second' | 'am' | 'pm') => void;
  open?: (event: MouseEvent) => void;
  close?: () => void;
  confirm?: (date: Date) => void;
  clear?: () => void;
  inputError?: (value?: string) => void;
  focus?: (event: MouseEvent | FocusEvent) => void;
  blur?: (event: FocusEvent) => void;
  pick?: (value: Date, type?: string) => void;
  calendarChange?: (
      date: Date,
      oldDate: Date,
      type:
          'year' |
          'month' |
          'last-year' |
          'next-year' |
          'last-month' |
          'next-month' |
          'last-decade' |
          'next-decade'
  ) => void;
  panelChange?: (type: 'year' | 'month' | 'date', oldType: 'year' | 'month' | 'date') => void;
}