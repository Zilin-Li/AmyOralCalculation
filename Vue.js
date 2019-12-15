Vue.component('mycom1',{
  template:'#temp1',
  data(){
    return{
      num1:null,
      num2: null,
      opt: "",
    }
  },

  created(){

    let optOption = Math.round(Math.random())
       if(optOption == 0){
         this.opt ="+"
         this.num1 = Math.ceil(Math.random()*10)
         this.num2 = Math.ceil(Math.random()*(10- this.num1))
       }
       else{
         this.opt = "-"
         this.num1 = Math.ceil(Math.random()*10)
         this.num2 = Math.ceil(Math.random()*this.num1)
       }
  },
})


var cor = new Vue({
  el:'#app1',
  data:{
    // update: true
    reload:true
  },
  methods:{
        refresh(){

           this.reload = false

           this.$nextTick(() => {
               this.reload = true
           })
         },
}
});
