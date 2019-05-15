import Vue from 'vue';
import Vuex from 'vuex';
import vuejsStorage from 'vuejs-storage';

Vue.use(Vuex)

const defaultState = {
  rateOptions: {
    monthlyRate: 100,
    weeklyRate: 23.08,
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
  paymentsOptions: [
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
      id: "fourWeeks",
      value: true,
      label: "4 Weeks",
      divisor: 13,
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
    }, {
      id: "sixMonths",
      value: true,
      label: "6 Months",
      divisor: 2
    }, {
      id: "yearly",
      value: true,
      label: "Yearly",
      divisor: 1
    },
  ],
  frequencyOptions: [
    {
      id: "unlimited",
      label: 'Unlimited',
      checked: true,
      multiplier: 1
    },
    {
      id: "2x-week",
      label: '2x/Week',
      checked: false,
      multiplier: .7,
    },
  ],
};

export default new Vuex.Store({
  state: {
    ...JSON.parse(JSON.stringify(defaultState)),
    view: 'Coach',
    gymName: 'Madlab School of Fitness',
    },
  getters: {
  },
  mutations: {
    setRateOptions(state, options) {
      state.rateOptions = options;
    },
    setPaymentsOptions(state, options) {
      state.paymentsOptions = options;
    },
    setPlanOptions(state, options) {
      state.planOptions = options;
    },
    setFrequencyOptions(state, options) {
      state.frequencyOptions = options;
    },
    setGymName(state, name) {
      state.gymName = name;
    },
    resetStore(state) {
      // state = JSON.parse(JSON.stringify(defaultState));
      state.rateOptions = JSON.parse(JSON.stringify(defaultState.rateOptions));
      state.paymentsOptions = JSON.parse(JSON.stringify(defaultState.paymentsOptions));
      state.planOptions = JSON.parse(JSON.stringify(defaultState.planOptions));
      state.frequencyOptions = JSON.parse(JSON.stringify(defaultState.frequencyOptions));
    },
    switchView(state) {
      if ('Client' === state.view)
        state.view = 'Coach';
      else
        state.view = 'Client';
    }
  },
  actions: {
  },
  plugins: [
    vuejsStorage({
      keys: ['rateOptions', 'planOptions', 'paymentsOptions', 'gymName'],
      namespace: 'madlab-price-point-calculator-persist',
    })
  ]
})

