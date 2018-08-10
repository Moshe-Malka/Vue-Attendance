<template>
  <div>
      <v-container>
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="email"
                                            label="Email"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" @click.prevent="onLogin">Log In</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        onLogin(){
            // get login creds and send GET request to backend server.
        }
    }
}
</script>

<style scoped>

</style>
