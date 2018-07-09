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
        this.id = to.params.id
      }
    }
  }
</script>
