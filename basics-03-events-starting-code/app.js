const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // dynamic function 
    // passing arguments
    addcounter(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#events');
