<script>
export default {
  name: 'StudentCard',
  props: ['student','students'],
  computed: {
    studentUrl() {
      return `/student/${this.student._id}`
    }
  }
}
</script>

<template lang="pug">
  article.card
    //- img(:src="`https://picsum.photos/300/200?random=${weektask._id}`", alt="")
    h4.card-tile 
      router-link(:to="studentUrl") {{ student.name }} 
    p {{ student.email }}
    p Average: {{ student.average }}  Total points: {{ student.totalPoints }}
    
</template>

<style scoped>
  .card{
    /* display: inline-block; */
    text-align: left;
    padding: 1px;
    border: 2px solid  #42b983;
    /* border-radius: 10px; */
    margin: 1px;
    

  }
  .card-title{

  }
</style>
  
