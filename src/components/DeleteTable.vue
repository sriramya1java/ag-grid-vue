<template>
  <div>
    this is delete table
  </div>
</template>
<script>
  export default{
    name: 'DeleteTable',
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    }
  }
</script>
