const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addcounter() {
      this.counter = this.counter+1
    }
  }
});

app.mount('#events');
