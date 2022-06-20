export interface Vue2DatePickerEvents {
  input?: (value: Date) => void;
  change?: (value: Date, type?: 'date' | 'hour' | 'minute' | 'second' | 'am' | 'pm') => void;
  open?: (event: FocusEvent) => void;
  close?: () => void;
  confirm?: (date: Date) => void;
  clear?: (event: MouseEvent) => void;
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