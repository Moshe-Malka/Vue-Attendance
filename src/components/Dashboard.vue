<template>
  <div>
    <br>
    <!-- Custom Date Picker Component -->
    <custom-date-picker />
    <!-- Custom Table Component -->
    <v-container>
      <custom-table/>
    </v-container>
  </div>
</template>

<script>
import CustomTable from './CustomTable.vue'
import CustomDatePicker from './CustomDatePicker.vue'

export default {
  name: 'Dashboard',
  components: {
    CustomDatePicker,
    CustomTable
  },
  data(){
    return{
      //
    }
  }
}
</script>

<style scoped>
.layout{
  align-items: center;
  justify-content: center;
}
.v-card{
  background:whitesmoke;
  color: #2c3e50;
}
</style>
