<template>
  <div>
    this is create table
  </div>
</template>
<script>
  export default{
    name: 'EditTable',
    watch: {
      '$route' (to, from) {
        console.log(from)
        this.id = to.params.id
      }
    },
    data () {
      return {
        pathVal: ''
      }
    },
    computed: {
      crumbs () {
        this.pathVal = this.$route.name
        console.log(this.pathVal)
      }
    }
  }
</script>
