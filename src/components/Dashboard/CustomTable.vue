<template>
    <div>
      <v-app id="CustomTable">
        <v-data-table
        v-model="selected"
        hide-actions
        :headers="headers"
        :items="items"
        select-all
        item-key="rfid"
        class="elevation-1">
          <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                  <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
                  ></v-checkbox>
              </td>
              <td>{{ props.item.rfid }}</td>
              <td>{{ props.item.worker_name }}</td>
              <td>{{ props.item.date }}</td>
              </tr>
          </template>
          <template slot="no-data">   <!--Show blue error-bar if no data -->
              <v-alert
              :value="true"
              color="blue"
              type="warning"
              >
              No Data to Show. Please select a Date-range.
              </v-alert>
          </template>
        </v-data-table>
      </v-app>
    </div>
</template>
<script>
export default {
    name: 'Dashboard',
    watch:{
      selected: function(){
        this.$store.commit('setSelected', this.selected)
      }
    },
    data: () => ({
      selected: [],
      headers: [
        {
          text: 'RFID',
          align: 'center',
          value: 'rfid'
        },
        { 
          text: 'Worker name',
          align: 'center',
          value: 'worker_name'
        },
        {
          text: 'Date-Time',
          align: 'center',
          value: 'date'
        }
      ]
      }),
    methods: {
      //...
    },
    computed:{
      items(){
        return this.$store.getters.getWorkersListing
      }
    }
}
</script>
<style scoped>

</style>
