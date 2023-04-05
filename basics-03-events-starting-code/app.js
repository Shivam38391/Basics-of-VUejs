const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmname: "",
    };
  },
  methods: {
    // dynamic function 
    // passing arguments
    // new
    confirmInput(){
      this.confirmname = this.name
    },
    submitform(event){
      // it is built in javascript
        // event.preventDefault(); 
        alert('Submited!');
    },
    setname(event, lastname) {
      this.name = event.target.value + " " + lastname;
      console.log(event.target)

    },
    addcounter(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#events');
