const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    // dynamic function 
    // passing arguments
    // new
    setname(event) {
      this.name = event.target.value;
      console.log(event.target)


    },
    addcounter(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#events');
