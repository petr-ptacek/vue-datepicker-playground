<template>
  <DatePickerComponent
      v-bind="parsedProps"
      v-on="parsedListeners"
      :value="value"
  >
    <template #input="options">
      <input
          ref="input"
          v-bind="options.props"
          v-on="options.events"
      >
    </template>

    <template #icon-calendar>
      <slot name="icon-calendar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
          <g stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5625050000000003"
                  d="M22.65625 3.90625H2.34375c-.86294792 0-1.5625.69955208-1.5625 1.5625v17.1875c0 .86291667.69955208 1.5625 1.5625 1.5625h20.3125c.86291667 0 1.5625-.69958333 1.5625-1.5625V5.46875c0-.86294792-.69958333-1.5625-1.5625-1.5625ZM.78125 10.15625h23.4375M7.03125 6.25V.78125M17.96875 6.25V.78125" />
            <path stroke-width="1.5625050000000003"
                  d="M5.859375 14.84375c-.21573958 0-.390625-.17489583-.390625-.390625s.17488542-.390625.390625-.390625M5.859375 14.84375c.21573958 0 .390625-.17489583.390625-.390625s-.17488542-.390625-.390625-.390625M5.859375 20.3125c-.21573958 0-.390625-.17489583-.390625-.390625s.17488542-.390625.390625-.390625M5.859375 20.3125c.21573958 0 .390625-.17489583.390625-.390625s-.17488542-.390625-.390625-.390625M12.5 14.84375c-.21572917 0-.390625-.17489583-.390625-.390625s.17489583-.390625.390625-.390625M12.5 14.84375c.21572917 0 .390625-.17489583.390625-.390625S12.71572917 14.0625 12.5 14.0625M12.5 20.3125c-.21572917 0-.390625-.17489583-.390625-.390625s.17489583-.390625.390625-.390625M12.5 20.3125c.21572917 0 .390625-.17489583.390625-.390625s-.17489583-.390625-.390625-.390625M19.140625 14.84375c-.21572917 0-.390625-.17489583-.390625-.390625s.17489583-.390625.390625-.390625M19.140625 14.84375c.21572917 0 .390625-.17489583.390625-.390625s-.17489583-.390625-.390625-.390625" />
            <g>
              <path stroke-width="1.5625050000000003"
                    d="M19.140625 20.3125c-.21572917 0-.390625-.17489583-.390625-.390625s.17489583-.390625.390625-.390625M19.140625 20.3125c.21572917 0 .390625-.17489583.390625-.390625s-.17489583-.390625-.390625-.390625" />
            </g>
          </g>
        </svg>
      </slot>
    </template>

    <template #icon-clear>
      <slot name="icon-delete">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <g transform="scale(1.04167)">
            <circle cx="11.998" cy="12" r="11.25" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="1.5" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="m7.498 16.5 8.999-9M16.498 16.5l-9.001-9" />
          </g>
        </svg>
      </slot>
    </template>
  </DatePickerComponent>
</template>

<script>
import DatePickerComponent from 'vue2-datepicker';
import { parseProps }      from './utils';

export default {
  name: 'TheDatepicker',
  props: {
    ...DatePickerComponent.props
  },
  data() {
    return {
      state: {
        isFocus: false,
        isOpen: false
      }
    };
  },
  computed: {
    parsedProps() {
      const { props } = parseProps(this.$props);
      return props;
    },
    parsedListeners() {
      const { events } = parseProps(this.$props);

      return {
        /**
         * @param {Date} value
         */
        input: (value) => {
          events.input?.(value);
          this.$emit('input', value);
        },
        /**
         * @param value
         * @param type
         */
        pick: (value, type) => {
          events.pick?.(value, type);
          this.$emit('pick', value, type);
        },
        /**
         * @param {FocusEvent} event
         */
        open: (event) => {
          events.open?.(event);
          this.$emit('open', event);
        },
        /**
         * @returns {void}
         */
        close: () => {
          events.close?.();
          this.$emit('close');
        },
        /**
         * @param {FocusEvent|MouseEvent} event
         **/
        focus: (event) => {
          events.focus?.(event);
          this.$emit('focus', event);
        },
        /**
         * @param {FocusEvent} event
         **/
        blur: (event) => {
          events.blur?.(event);
          this.$emit('blur', event);
        },
        /**
         * @param {Date} value
         * @param {any} type
         */
        change(value, type) {
          events.change(value, type);
          this.$emit('change', value, type);
        },
        /**
         * @param {Date} date
         */
        confirm: (date) => {
          events.confirm?.(date);
          this.$emit('confirm', date);
        },
        /**
         * @param {MouseEvent} event
         */
        clear: (event) => {
          events.clear?.(event);
          this.$emit('clear', event);
        },
        /**
         * @param {string} value
         */
        'input-error'(value) {
          events.inputError?.(value);
          this.$emit('input-error', value);
        },
        /**
         * @param type
         * @param oldType
         */
        'panel-change'(type, oldType) {
          events.panelChange?.(type, oldType);
          this.$emit('panel-change', type, oldType);
        },
        /**
         * @param date
         * @param oldDate
         * @param type
         */
        'calendar-change'(date, oldDate, type) {
          events.calendarChange?.(date, oldDate, type);
          this.$emit('calendar-change', date, oldDate, type);
        }
      };
    }
  },
  components: {
    DatePickerComponent
  }
};
</script>