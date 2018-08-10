<template>
  <div class="fab">
    <v-speed-dial
      v-model="fab"
      :top="true"
      :left="true"
      :direction="'bottom'"
      :transition="'slide-y-reverse-transition'"
    >
      <v-btn        
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>      
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'FAB',
  data: function(){
    return{
        fab: false
    }
  }
}
</script>

<style scoped>
.fab{
  float:left;
}
</style>
