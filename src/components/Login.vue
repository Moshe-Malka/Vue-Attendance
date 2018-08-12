<template>
  <div>
      <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                    <v-toolbar dark color="blue lighten-1">
                        <v-toolbar-title>Login</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                v-model="email"
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue lighten-1"
                            dark
                            type="submit"
                            @click.prevent="onLogin"
                            >Login</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-flex>
            <v-alert
                :value="alert"
                color="red"
                type="error"
                transition="scale-transition"
                >
                Login Failed!
            </v-alert>
        </v-flex>
    </v-app>    
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',
            alert: false
        }
    },
    methods:{
        onLogin(){      // send GET request for AUTH to backend server.
            try{
                this.$store.dispatch('authUser',{ email, password}).then( res => {
                    if(res){
                        this.$router.push('/dashboard')     // move to dashboard
                    }else{
                        toogleAlert()
                    }                    
                })
            } catch(e){
                toogleAlert()
                return 
            }
        },
        toogleAlert(){
            this.email = ''
            this.password = ''
            if(!this.alert){
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                }, 5000);
            }
        }
    }
}
</script>

<style scoped>

</style>
