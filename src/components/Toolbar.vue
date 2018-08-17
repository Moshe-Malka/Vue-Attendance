<template>
  <div>
    <v-toolbar absolute color="grey darken-3">
      <v-btn icon>
        <router-link to="/">
        <v-icon large color="white">home</v-icon>
        </router-link>
      </v-btn>
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
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
    //
  }
}
</script>

<style scoped>
a.router-link-active{
  text-decoration: none;
  color:black;
}
</style>
