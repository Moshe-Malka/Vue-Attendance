<template>
    <div>
      <v-app id="Login">
        <v-content>            
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4 pr-5 pb-3 transparent>
                        <v-card>
                            <div class="text-xs-center">
                                <h1 class="ml-2 mb-0">Login</h1>
                            </div>
                            <v-form v-model="valid">                                
                                <v-flex pr-5 pb-3>
                                    <v-text-field
                                        v-model="email"
                                        label="E-mail"
                                        :rules="emailRules"
                                        prepend-icon="fas fa-user"                  
                                        required
                                        color="white"                           
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        label="Password"
                                        color="white"
                                        :rules="passwordRules"                            
                                        prepend-icon="fas fa-key"
                                        persistent-hint="true"
                                        hint="At least 6 characters"
                                        :type="showPass ? 'text' : 'password'"
                                        :append-icon="showPass ? 'visibility_off' : 'visibility'"
                                        @click:append="showPass = !showPass"
                                        required                            
                                    ></v-text-field>
                                </v-flex>
                                <div class="text-xs-center">
                                    <v-btn
                                        :disabled="loginDialog"
                                        :loading="loginDialog"
                                        class="white--text"
                                        color="blue darken-2"
                                        @click.stop="loginDialog = true"
                                        >
                                    Log-In
                                    </v-btn>
                                </div>
                            </v-form>
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
            loginDialog: false,
            showPass: false,
            email: '',
            password: '',
            alert: false,
            image: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?cs=srgb&dl=abstract-background-blur-949587.jpg&fm=jpg',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => /[0-9a-zA-z]{6,}/.test(v) || 'Password must be valid'
            ]
        }
    },
    watch: {
      loginDialog(val) {
        if (!val || (this.email ==='' || this.password === '') || !this.alert){
            this.toggleAlert()
            this.loginDialog = false
            return
        }else{
            setTimeout(() => {
                this.loginDialog = false
                this.onLogin()
        }, 1500)
        }
      }
    },
    methods:{
        onLogin(){      // send GET request for AUTH to backend server.            
            this.$router.push('/dashboard')
            // this.toggleAlert()
        //     try{
        //         this.$store.dispatch('authUser',{ email, password}).then( res => {
        //             if(res){
        //                 this.$router.push('/dashboard')     // move to dashboard
        //             }else{
        //                 this.toggleAlert()
        //             }                    
        //         })
        //     } catch(e){
        //         this.toggleAlert()
        //         return 
        //     }
        }, 
        toggleAlert(){
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
#Login{
    background-image:linear-gradient(#bdc3c7,#2c3e50)
}

/* .transparent > []{
    background-color: white!important;
    opacity: 0.60;
    border-color: transparent!important;
} */

.v-card{
    border-radius: 10px;
    position:relative;
    background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
    background: rgba(204, 204, 204, 0.5);
}
</style>
