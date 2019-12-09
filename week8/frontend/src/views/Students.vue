<script>
// @ is an alias to /src
import StudentCard from '@/components/student-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'students',
  components: {
     StudentCard
  },
  computed:{
    ...mapState(['students'])
  },
  methods:{
    ...mapActions(['fetchStudents'])
  },
  created(){
    this.fetchStudents()
  }
}
</script>



<template lang="pug">
  main
    section
      h2 Registered students:
      student-card(v-for="student in students",:student="student")
    
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

