<template>
  <Vue2DatepickerComponent
      v-bind="datepickerProps"
      v-on="datepickerListeners"
      :value="value"
  >
    <template #input="options">
      <input
          ref="input"
          v-bind="parseInputProps(options.props)"
          v-on="parseInputEvents(options.events)"
      >
    </template>

    <template #icon-calendar>
      <slot name="icon-calendar" />
    </template>

    <template #icon-clear>
      <slot name="icon-delete" />
    </template>
  </Vue2DatepickerComponent>
</template>

<script>
import Vue2DatepickerComponent           from 'vue2-datepicker';
import { parseProps, createDateHelpers } from './utils';
import 'vue2-datepicker/locale/cs';

export default {
  name: 'TheDatepicker',
  props: {
    ...Vue2DatepickerComponent.props,
    clearable: {
      required: false,
      default: false
    },
    lang: {
      required: false,
      default: 'cs',
      type: [Object, String]
    }
  },
  data() {
    return {
      state: {
        isFocus: false,
        /** @type {Readonly<import('./types').DatepickerHelpers>} */
        helpers: createDateHelpers()
      }
    };
  },
  mounted() {
    console.dir(this.state);
  },
  computed: {
    /**
     * @returns {import('./types').Vue2Datepicker.Props}
     */
    datepickerProps() {
      const { props } = parseProps(this.$props);
      return Object.assign(
          {},
          props,
          {
            formatter: props.formatter ??
                {
                  /**
                   * @param {Date} date
                   * @returns {string | undefined}
                   */
                  stringify: (date) => {
                    const { stringify, stringifyFocus } = this.state.helpers.formatters ?? {};

                    return this.state.isFocus ?
                        (stringifyFocus?.(date) ?? undefined) :
                        (stringify?.(date) ?? undefined);
                  },
                  /**
                   * @param {string|null} value
                   * @returns {Date | null}
                   */
                  parse: (value) => {
                    return this.state.helpers.formatters?.parse(value) ?? value;
                  }
                }
          }
      );
    },
    /**
     * @returns {import('./types').Vue2Datepicker.Events}
     */
    datepickerListeners() {
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
         * @param {MouseEvent} event
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
          if ( this.editable ) {
            this.state.isFocus = true;
          }

          events.focus?.(event);
          this.$emit('focus', event);
        },
        /**
         * @param {FocusEvent} event
         **/
        blur: (event) => {
          if ( this.editable ) {
            this.state.isFocus = false;
          }

          events.blur?.(event);
          this.$emit('blur', event);
        },
        /**
         * @param {Date} value
         * @param {any} type
         */
        change: (value, type) => {
          events.change?.(value, type);
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
         * @returns {void}
         */
        clear: () => {
          events.clear?.();
          this.$emit('clear');
        },
        /**
         * @param {string} value
         */
        inputError: (value) => {
          events.inputError?.(value);
          this.$emit('input-error', value);
        },
        /**
         * @param type
         * @param oldType
         */
        panelChange: (type, oldType) => {
          events.panelChange?.(type, oldType);
          this.$emit('panel-change', type, oldType);
        },
        /**
         * @param date
         * @param oldDate
         * @param type
         */
        calendarChange: (date, oldDate, type) => {
          events.calendarChange?.(date, oldDate, type);
          this.$emit('calendar-change', date, oldDate, type);
        }
      };
    }
  },
  methods: {
    /**
     * @param {Record<string,*>} props
     * @returns {Record<string,*>}
     *
     */
    parseInputProps(props) {
      return Object.assign(
          {},
          props,
          {
            value: this.state.helpers.formatters?.inputValue?.(props.value) ?? props.value
          }
      );
    },
    /**
     * @param {Record<string,*>} events
     * @returns {Record<string,*>}
     */
    parseInputEvents(events) {
      return Object.assign(
          {},
          events,
          {
            /**
             * @param {KeyboardEvent} event
             * @returns {void}
             */
            keydown: (event) => {
              this.state.helpers.handlers?.inputKeydown?.(event, events?.keydown);
            },
            /**
             * @param {InputEvent} event
             * @returns {void}
             */
            input: (event) => {
              this.state.helpers.handlers?.inputInput?.(event, events?.input);
            }
          }
      );
    }
  },
  components: {
    Vue2DatepickerComponent
  }
};
</script>