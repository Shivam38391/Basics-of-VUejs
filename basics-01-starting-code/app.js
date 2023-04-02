const app = Vue.createApp({
    data: function(){
        return {
            coursegoalA : "FINISH THE COURSE and learn vue",
            coursegoalB : "MASTER THE COURSE",
            links : "https://vuejs.org/",
        };
    },

/*     methods has to called methods and data also
 */    methods: {
        outputGoal: function(){
          const randomNumber =  Math.random() * 100;
          if (randomNumber >50){
            // return `Learn VUE ${randomNumber}`
            return this.coursegoalA
            
          }else{
            // return `Master Vue  ${randomNumber}`
            return this.coursegoalB
          }
        }
    }
});

app.mount("#user-goal");