import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditTable from '@/components/EditTable'
import DeleteTable from '@/components/DeleteTable'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/edittable',
      name: 'EditTable',
      component: EditTable
    },
    {
      path: '/deletetable',
      name: 'DeleteTable',
      component: DeleteTable
    }
  ]
})
