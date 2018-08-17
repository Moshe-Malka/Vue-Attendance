<template>
    <div>
        <!-- Datetime Picker -->
        <date-picker
        @confirm="fetchWorkers"
        v-model="daterange"
        range
        confirm
        width=350
        range-separator="<>"
        lang="en"
        format="YYYY-MM-DD HH:mm:ss"
        ></date-picker>
    </div>    
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
    name: 'CustomActions',
    components: {
        DatePicker
    },
    data(){
        return{
            daterange: []
            }
        },
    methods: {
        fetchWorkers(){
            const start = this.daterange[0]
            const end = this.daterange[1]
            this.$store.dispatch('fetchWorkersInRange', { start, end })
        }
    },
    computed:{
        workers(){
            return this.$store.getters.getWorkersListing
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


