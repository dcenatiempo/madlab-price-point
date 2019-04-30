import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rateOptions: {
      monthlyRate: 100,
      ptRate: 60,
    },
    planOptions: [
      {
        id: "base",
        checked: true,
        value: 2,
        label: "Base",
      }, {
        id: "bronze",
        checked: true,
        value: 6,
        label: "Bronze",
      }, {
        id: "silver",
        checked: true,
        value: 12,
        label: "Silver",
      }, {
        id: "gold",
        checked: true,
        value: 24,
        label: "Gold",
      }, {
        id: "platinum",
        checked: true,
        value: 48,
        label: "Platinum",
      }
    ],
    frequencyOptions: [
      {
        id: "weekly",
        value: true,
        label: "Weekly",
        divisor: 52,
      }, {
        id: "twoWeeks",
        value: true,
        label: "2 Weeks",
        divisor: 26,
      }, {
        id: "biMonthly",
        value: true,
        label: "2x/ Month",
        divisor: 24,
      }, {
        id: "monthly",
        value: true,
        label: "Monthly",
        divisor: 12,
      }, {
        id: "quarterly",
        value: true,
        label: "Quarterly",
        divisor: 4
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})

