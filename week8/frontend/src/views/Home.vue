<script>
// @ is an alias to /src
import WeektaskCard from '@/components/weektask-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
     WeektaskCard
  },
  computed:{
    ...mapState(['weektasks','counter'])
  },
  methods:{
    ...mapActions(['fetchWeektasks','incrementCounter'])
  },
  created(){
    this.fetchWeektasks()
  }
}
</script>



<template lang="pug">
  main
    section
      h2 Available tasks:
      weektask-card(v-for="weektask in weektasks",:weektask="weektask")
    section
      button.increment-button(@click="incrementCounter") Increment 
      div {{ counter }}
</template>


<style scoped>
  h2{
    margin-left: 6px;
    text-align: left;
  }

  section{
    padding: 40px 0;
    text-align: center;
    
  }

  .increment-button{
    background-color: darkcyan;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid darkcyan ;
    margin: 10px;
    color: white;

  }

  .increment-button:hover{
    background-color: aliceblue;
    color: darkcyan;
  }

</style>

