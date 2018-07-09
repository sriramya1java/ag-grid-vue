<template id="app">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-12">
          <ag-grid-vue style="width: 1000px; height: 116px;"
                       class="ag-theme-balham"
                       :gridOptions="gridOptions"
                       :rowDataChanged="onRowDataChanged"
                       :rowData="rowData">
          </ag-grid-vue>
        </div>
      </div>
    </div>
    <span>
      <router-view></router-view>
    </span>
  </div>
</template>
<script>
  import {AgGridVue} from 'ag-grid-vue'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  const router = new VueRouter()
  export default {
    name: 'App',
    data () {
      return {
        columnDefs: null,
        rowData: null,
        gridOptions: null
      }
    },
    components: {
      AgGridVue,
      'edit-component': {
        router,
        template: '<router-link to="/edittable">edit table</router-link>'
      },
      'delete-component': {
        router,
        template: '<router-link to="/deletetable">delete table</router-link>'
      }
    },
    methods: {
      createColDefs () {
        return [
          {headerName: 'Edit', cellRendererFramework: 'edit-component', suppressSorting: true},
          {headerName: 'Program ID', field: 'programId', icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}, sort: 'asc'},
          {headerName: 'Dataset ID', field: 'datasetId'},
          {headerName: 'Table ID', field: 'tableId'},
          {headerName: 'Display Label', field: 'tableType'},
          {headerName: 'Last Updated By', field: 'displayLabel'},
          {headerName: 'Last Updated', field: 'lastUpdatdeBy'},
          {headerName: 'Last Delivered', field: 'lastDelivered'},
          {headerName: 'Delete', field: 'delete', cellRendererFramework: 'delete-component', suppressSorting: true},
          {headerName: 'Deliver', field: 'deliver', suppressSorting: true}
        ]
      },
      onRowDataChanged () {
        Vue.nextTick(() => {
          this.gridOptions.api.sizeColumnsToFit()
        })
      }
    },
    beforeMount () {
      this.gridOptions = {
        enableColResize: true,
        enableSorting: true,
        columnDefs: this.createColDefs(),
        onGridReady: function (params) {
          params.api.sizeColumnsToFit()
        }
      }
      this.rowData = [
        {
          programId: 'ACS',
          datasetId: 'ACSDT1Y2016',
          tableId: 'B25045',
          tableType: 'HIERARCHICAL1',
          displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
          lastUpdatdeBy: 'Matthew Curtiss',
          lastUpdated: '--',
          lastDelivered: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'PEP',
          datasetId: 'POPESTCHARAGEGROUPS2016',
          tableId: 'PEPAGESEX',
          tableType: 'HIERARCHICAL1',
          displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
          lastUpdatdeBy: 'Matthew Curtiss',
          lastUpdated: '--',
          lastDelivered: 'June 28, 2018 02:48:01 pm'
        }
      ]
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 13px;
  }
</style>
