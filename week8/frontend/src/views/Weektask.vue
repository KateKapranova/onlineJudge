<script>
// @ is an alias to /src
import WeektaskCard from '@/components/weektask-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Weektask',
  components: {
     WeektaskCard
  },
  computed:{
    ...mapState(['weektask'])
  },
  methods:{
    ...mapActions(['fetchWeektask'])
  },
  created(){
    this.fetchWeektask(this.$route.params.id)
  }
}
</script>



<template lang="pug">
  main
    section
      weektask-card(:weektask="weektask")
    
</template>


<style scoped>
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

