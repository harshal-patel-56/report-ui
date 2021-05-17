<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="info" style="color: white">Login</v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <label style="font-size: 1.25em">Username</label>
                    <v-text-field
                        type="text"
                        name="username"
                        id="username"
                        class="mt-1"
                        outlined
                        dense
                        required
                        :rules="[v => !!v || 'Username required']"
                        placeholder="Username"
                        v-model="username"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label style="font-size: 1.25em">Password</label>
                    <v-text-field
                        :type="show ? 'text' : 'password'"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        name="password"
                        id="password"
                        class="mt-1"
                        outlined
                        dense
                        required
                        :rules="[v => !!v || 'Password required']"
                        placeholder="Password"
                        v-model="password"
                        @click:append="show = !show"></v-text-field>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn
                        width="200"
                        height="45"
                        color="info"
                        @click="login"
                        :disabled="loading"
                    >
                      Sign In
                    </v-btn>
                  </v-col>
                  <v-col v-if="error !== ''">
                    <v-alert
                        outlined
                        dense
                        type="error"
                        v-model="error"
                    >
                      {{ error }}
                    </v-alert>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios';

export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
      error: '',
      show: false,
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true
      // this.error = "Invalid Credentials!!!"
      if (this.username !== '' && this.password !== null) {
        const data = {
          username: this.username,
          password: this.password
        }

        axios.post('/isValid', data).then(response => {
          console.log(response)
          if (response === true) {
            this.error = 'Login Success!'
            // TODO: Redirection
          } else {
            this.error = 'Invalid Credentials!!!'
          }
        }).catch(error => {
          console.log(error.response)
          this.error = error.response
        })

      } else {
        this.error = 'Username or Password should not be empty!'
      }

      this.loading= false
    },
  }
}
</script>

<style scoped>
.theme--light.v-label {
  color: #212529;
}

.theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle {
  color: rgb(0, 0, 0);
}

.v-label {
  font-size: 16px;
  line-height: 1;
  min-height: 8px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>