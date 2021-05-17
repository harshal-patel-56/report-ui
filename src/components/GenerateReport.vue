<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="info" style="color: white"> Generate Report</v-card-title>
          <v-card-text class="px-0">
            <v-container fluid>
              <v-row class="justify-center text-center">
                <v-tabs
                    v-model="tab"
                    fixed-tabs
                    background-color="info"
                    color="white"
                    active-class="active"
                    dark
                >
                  <v-tabs-slider color="white"></v-tabs-slider>

                  <v-tab
                      v-for="item in items"
                      :key="item"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div v-if="tab === 0">
                    <v-container fluid>
                      <v-form>
                        <v-row class="justify-center">
                          <v-col cols="12" md="8" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">Select Date</label>
                            <v-text-field
                                class="mt-1"
                                type="date"
                                id="r1Date"
                                outlined
                                dense
                                required
                                hide-details
                                @click="setReport1MaxDate"
                                v-model="report1.date"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="12" class="text-right">
                            <v-btn
                                type="submit"
                                width="200"
                                height="40"
                                :disabled="validateReport1()"
                                outlined
                                color="info"
                                @click="generateReport1"
                            >
                              Generate Report
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
                  </div>

                  <div v-if="tab === 1">
                    <v-container fluid>
                      <v-form>
                        <v-row class="justify-center">
                          <v-col cols="12" md="12" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">Customer ID</label>
                            <v-text-field
                                class="mt-1"
                                type="text"
                                outlined
                                dense
                                required
                                hide-details
                                v-model="report2.customerId"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">Start Date Time</label>
                            <v-text-field
                                class="mt-1"
                                type="datetime-local"
                                id="r2StartDate"
                                outlined
                                dense
                                required
                                hide-details
                                v-model="report2.startDateTime"
                                @click="setReport2StartDate"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">End Date Time</label>
                            <v-text-field
                                class="mt-1"
                                type="datetime-local"
                                id="r2EndDate"
                                outlined
                                dense
                                required
                                hide-details
                                v-model="report2.endDateTime"
                                @click="setReport2EndDate"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="12" class="text-right">
                            <v-btn
                                type="submit"
                                width="200"
                                height="40"
                                outlined
                                :disabled="validateReport2()"
                                color="info"
                            >
                              Generate Report
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
                  </div>

                  <div v-if="tab === 2">
                    <v-container fluid>
                      <v-form>
                        <v-row class="justify-center">
                          <v-col cols="12" md="12" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">Customer ID</label>
                            <v-text-field
                                class="mt-1"
                                type="text"
                                outlined
                                dense
                                required
                                hide-details
                                v-model="report3.customerId"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">Start Number</label>
                            <v-text-field
                                class="mt-1"
                                type="number"
                                step="1"
                                outlined
                                min="1"
                                dense
                                required
                                hide-details
                                v-model="report3.startNumber"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" class="mt-3">
                            <label style="font-size: 1rem" class="ml-1">End Number</label>
                            <v-text-field
                                class="mt-1"
                                type="number"
                                step="1"
                                outlined
                                :min="report3.startNumber"
                                dense
                                required
                                hide-details
                                v-model="report3.endNumber"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="12" class="text-right">
                            <v-btn
                                type="submit"
                                width="200"
                                height="40"
                                outlined
                                color="info"
                                :disabled="validateReport3()"
                            >
                              Generate Report
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
                  </div>

                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GenerateReport",
  data() {
    return {
      items: ['Report 1', 'Report 2', 'Report 3'],
      tab: null,
      reportType: '',
      report1: {
        date: ''
      },
      report2: {
        startDateTime: '',
        endDateTime: '',
        customerId: ''
      },
      report3: {
        startNumber: '',
        endNumber: '',
        customerId: ''
      },
      loading: false
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    setReport1MaxDate() {
      var date = new Date();
      document.getElementById("r1Date").setAttribute("max", date.toISOString().substring(0, 10))
    },
    setReport2StartDate() {
      var date = new Date();
      document.getElementById("r2StartDate").setAttribute("max", date.toISOString().substring(0, 19))
    },
    setReport2EndDate() {
      if (this.report2.startDateTime !== '') {
        var date = new Date(this.report2.startDateTime)
        date.setDate(date.getDate() + 1)
        document.getElementById("r2EndDate").setAttribute("min", date.toISOString().substring(0, 19))
      } else {
        const date = new Date();
        document.getElementById("r2EndDate").setAttribute("max", date.toISOString().substring(0, 19))
      }
    },

    validateReport1() {
      return this.report1.date === ''
    },

    validateReport2() {
      return (this.report2.customerId === '' || this.report2.startDateTime === '' || this.report2.endDateTime === '')
    },

    validateReport3() {
      return (this.report3.customerId === '' || this.report3.startNumber === '' || this.report3.endNumber === '' || this.report3.endNumber < this.report3.startNumber)
    },

    generateReport1() {
      if (this.report1.date !== '') {
        console.log(this.report1.date)
      } else {
        this.error = "Report 1 Date should not be empty"
      }
    },

    generateReport2() {
      if (this.report2.customerId !== '' && this.report2.startDateTime !== '' && this.report2.endDateTime !== '' ) {
        console.log(this.report2.customerId)
        console.log(this.report2.startDateTime)
        console.log(this.report2.endDateTime)
      } else {
        this.error = "Report 2 Date should not have empty fields."
      }
    },

    generateReport3() {
      if (this.report3.customerId !== '' && this.report3.startNumber !== '' && this.report3.endNumber !== '' ) {
        console.log(this.report3.customerId)
        console.log(this.report3.startNumber)
        console.log(this.report3.endNumber)
      } else {
        this.error = "Report 2 Date should not have empty fields."
      }
    }
  },
}
</script>

<style scoped>
.theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle {
  color: rgb(0, 0, 0);
}

</style>