<template>
  <div>
    <br><br>
    <v-container>
      <v-layout>
        <date-picker
          v-model="datetime"
          range
          confirm
          placeholder="Pick Datetime"
          width=350
          range-separator="<>"
          type="datetime"
          lang="en"
          format="YYYY-MM-DD HH:mm:ss"
          ></date-picker>
      </v-layout>
    </v-container>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        item-key="worker_name"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">    <!--toggle expansion -->
            <td>{{ props.item.rfid }}</td>
            <td>{{ props.item.worker_name }}</td>
            <td>{{ props.item.date_time }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-card-text>{{ props.item }}</v-card-text>   <!--Show extra Data -->
          </v-card>
        </template>
        <template slot="no-data">   <!--Show blue error-bar if no data -->
          <v-alert
            :value="true"
            color="blue"
            type="warning"
          >
            No Data to Show.
          </v-alert>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<!-- TODO: Add table with Vuetify:
          ability to delete/edit a row (worker).
          paginations (with selectable 'Rows per page').
          Selectable rows (for deleting many users).
          Slot: expand-->

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Dashboard',
  components: {
    DatePicker
  },
  data: () => ({
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
          // sortable: false,
          value: 'date_time'
        }
      ],
      items: [
          {
            rfid: 25872405745,
            worker_name: 'Moshe Malka',
            date_time: '2018-18-09 23:23:23'
          },
          {
            rfid: 86586767,
            worker_name: 'kiko Malka',
            date_time: '2018-18-01 23:23:23'
          },
          {
            rfid: 235436456456,
            worker_name: 'Hana Hadad-Malka',
            date_time: '2018-18-10 23:23:23'
          },
          {
            rfid: 12874645,
            worker_name: 'Blalalalal',
            date_time: '2018-18-19 23:23:23'
          }
        ]
    }),
    methods: {
      editItem (item) {
        alert("EDITING: " + JSON.stringify(item))
      },

      deleteItem (item) {
        alert("DELETING: " + JSON.stringify(item))
      }
    }
}
</script>

<style scoped>
.layout{
  align-items: center;
  justify-content: center;
} 
</style>
