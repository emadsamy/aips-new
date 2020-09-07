<template lang="html">
  <div class="date-inputs">
    <div class="date--start d-flex align-items-center">
        <label for="from">From</label>
        <input v-model="valueFrom" type="text" placeholder="Choose a" class="form-control start-date" data-toggle="datepicker">
    </div>
    <div class="date--end d-flex align-items-center">
        <label for="from">To</label>
        <input v-model="valueTo" type="text" placeholder="Choose a" class="form-control end-date" data-toggle="datepicker">
    </div>
    <span class="icon-calendar ca-date"></span>
  </div>
</template>

<script>
export default {
  props: ["valueFrom", "valueTo"],
  mounted() {

    // datepicker
    var $startDate = $('.start-date');
    var $endDate = $('.end-date');

    $startDate.datepicker({
        autoHide: true,
        zIndex: 2048,
    });
    $endDate.datepicker({
        autoHide: true,
        zIndex: 2048,
        startDate: $startDate.datepicker('getDate'),
    });

    $startDate.on('change', function () {
        $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
    });
  },
}
</script>

<style scoped>
.ca-date {
  position: absolute;
  right: 12px;
  font-size: 23px;
  top: 50%;
  transform: translateY(-50%);
}
.ca-date:before {
  color: #999;
  font-weight: normal;
}
label {
  margin-bottom: 0;
  font-size: 12.5px;
  font-weight: bold
}
input {
  padding-top: 0;
  padding-bottom: 0;
}
.form-control::placeholder,
.form-control {
  font-size: 11.5px;
  font-weight: bold;
  color: #666
}
.date-inputs {
  margin-top: -6px;
}
</style>
