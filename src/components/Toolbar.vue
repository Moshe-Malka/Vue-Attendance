<template>
  <div>
    <v-toolbar
      absolute
      color="blue lighten-1"
    >
      <v-btn icon>
        <router-link to="/">
        <v-icon large>home</v-icon>
        </router-link>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- move these to component and render only in dashboard. -->
      <v-btn icon>
        <v-icon medium>add_circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon medium>delete</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data: function(){
    return{
      title: 'Attendance',
      clicked: false
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
a.router-link-active{
  text-decoration: none;
  color:black;
}
</style>
