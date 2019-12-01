<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['weektasks'])
  },
  methods:{
    ...mapActions(['fetchWeektasks'])
  },
  created(){
    this.fetchWeektasks()
  }
}
</script>



<template lang="pug">
  main
    h2 Hello world!
    div  {{ weektasks }}
</template>


