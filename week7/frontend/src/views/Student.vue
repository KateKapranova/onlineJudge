<script>
// @ is an alias to /src
import StudentCard from '@/components/student-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'student',
  components: {
     StudentCard
  },
  computed:{
    ...mapState(['student'])
  },
  methods:{
    ...mapActions(['fetchStudent'])
  },
  created(){
    this.fetchStudent(this.$route.params.id)
  }
}
</script>



<template lang="pug">
  main
    section
      student-card(:student="student")
    
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


</style>

