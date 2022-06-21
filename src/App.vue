<template>
  <div id="app">
    <div>
      <TheDatepicker
          v-model="state.datepicker.value"
          v-bind="state.datepicker.props"
          @input="inputHandler"
      />
    </div>

    <div>
       <pre>
        {{ state.value }}
      </pre>
    </div>
  </div>
</template>

<script>
import { TheDatepicker } from './components/Datepicker';
import { defineProps }   from './components/Datepicker';

export default {
  name: 'App',
  data() {
    return {
      state: {
        datepicker: {
          value: new Date(),
          props: defineProps({
            type: 'date'
          })
        }
      }
    };
  },
  methods: {
    inputHandler(...argv) {
    }
  },
  components: {
    TheDatepicker
  }
};
</script>