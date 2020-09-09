<template>
  <date-range-picker
    ref="picker"
    :opens="opens"
    :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
    :minDate="minDate"
    :maxDate="maxDate"
    :singleDatePicker="singleDatePicker"
    :timePicker="timePicker"
    :timePicker24Hour="timePicker24Hour"
    :showWeekNumbers="showWeekNumbers"
    :showDropdowns="showDropdowns"
    :autoApply="autoApply"
    v-model="dateRange"
    @update="updateValues"
    @toggle="checkOpen"
    :linkedCalendars="linkedCalendars"
    :dateFormat="dateFormat"
  >
    <template style="min-width: 350px;">
      <!-- {{ picker.startDate | date }} - {{ picker.endDate | date }} -->
      15/10/2020 - 15/10/2020
    </template>
  </date-range-picker>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  components: { DateRangePicker },
  data() {
    return {
      picker: {
        startDate: "2019-05-01",
        endDate: "2019-05-01",
        date: "2019-05-01",
      },
    };
  },
};
</script>
