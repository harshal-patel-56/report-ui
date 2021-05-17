<template>
  <v-app>
    <v-app-bar
        app
        light
    >
      <div>
        <v-img
            alt="Logo"
            class="shrink mr-2"
            src="https://www.truist.com/content/dam/truist/us/en/logos/truist-logo.png"
            transition="scale-transition"
            width="100"
        >
        </v-img>
      </div>
      <v-divider vertical class="mx-2"></v-divider>
      <div class="ml-2">
        <span style="color: #7c6992; font-size: 1.25rem; font-weight: bold">REPORTING APP</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
       outlined
      >
        Sign Out
      </v-btn>

    </v-app-bar>

    <v-main>
      <GenerateReport/>
      <LoginForm/>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import GenerateReport from "@/components/GenerateReport";

export default {
  name: 'App',

  components: {
    GenerateReport,
    LoginForm,
  },

  data: () => ({
    //
  }),
};
</script>
