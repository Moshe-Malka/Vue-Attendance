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
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data: function(){
    return{
      title: 'Vue-Attendance',
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
