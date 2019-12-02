<script>
export default {
  name: 'WeektaskCard',
  props: ['weektask'],
  computed: {
    weektaskUrl() {
      return `/weektask/${this.weektask._id}`
    }
  }
}
</script>

<template lang="pug">
  article.card
    //- img(:src="`https://picsum.photos/300/200?random=${weektask._id}`", alt="")
    h2.card-tile 
      router-link(:to="weektaskUrl") {{ weektask.name }} 
    p Deadline: {{ weektask.deadline }}
    
</template>

<style scoped>
  .card{
    /* display: inline-block; */
    text-align: left;
    padding: 3px;
    border: 2px solid  #42b983;
    /* border-radius: 10px; */
    margin:5px;
  }
  .card-title{

  }
</style>
  
