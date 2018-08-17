<template>
  <div>
    <v-container grid-list-md text-xs-center mt-5>
        <v-layout row wrap mt-3>
          <!-- Custom Date Picker Component -->
          <custom-date-picker />
          <!-- Custom Actions Component -->
          <custom-actions />
        </v-layout>
    </v-container>
    <!-- Custom Table Component -->
    <v-container>
      <custom-table/>
    </v-container>
  </div>
</template>

<script>
import CustomTable from './CustomTable.vue'
import CustomDatePicker from './CustomDatePicker.vue'
import CustomActions from './CustomActions.vue'

export default {
  name: 'Dashboard',
  components: {
    CustomDatePicker,
    CustomTable,
    CustomActions
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
