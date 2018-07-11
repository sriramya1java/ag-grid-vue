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
        this.id = this.$route.query.data
        console.log(this.id)
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
    },
    created () {
      this.id = this.$route.query.data
      console.log(this.id)
    }
  }
</script>
