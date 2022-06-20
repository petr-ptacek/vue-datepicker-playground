<template>
  <div id="app">
    <div>
      <TheDatepicker v-model="state.value" />
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
        value: new Date(),
        props: defineProps({})
      }
    };
  },
  components: {
    TheDatepicker
  }
};
</script>