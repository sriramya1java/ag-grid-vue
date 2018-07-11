<template id="app">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-12">
          <ag-grid-vue style="width: 1000px; height: 116px;"
                       class="ag-theme-balham"
                       :gridOptions="gridOptions"
                       :rowDataChanged="onRowDataChanged"
                       :rowSelected="onRowSelected"
                       :rowData="rowData">
          </ag-grid-vue>
        </div>
      </div>
        <div class="clearfix"></div>
        <button type="button" class="btn btn-primary float-right" :disabled = isDisabled @click='fileDelivery'>Create Delivery File</button>
    <span>
      <router-view></router-view>
    </span>
   </div>
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
      'ag-grid-vue': AgGridVue,
      'edit-component': {
        router,
        template: '<a href="#/edittable">edit table</a>'
      },
      'delete-component': {
        template: '<a @click="deleteTable">delete icon</a>',
        created () {
          // console.log(this.rowData.tableId)
        },
        methods: {
          deleteTable () {
            confirm('Do you want to delete the table')
          }
        }
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
          {headerName: 'Deliver', field: 'deliver', suppressSorting: true, checkboxSelection: true, headerCheckboxSelection: true}
        ]
      },
      onRowDataChanged () {
        Vue.nextTick(() => {
          this.gridOptions.api.sizeColumnsToFit()
        })
      },
      onRowSelected () {
        console.log(this.gridOptions.api.getSelectedRows())
        console.log(this.gridOptions.api.getSelectedRows().length)
      },
      fileDelivery () {
        confirm('Do you want to generate XML for the selected tables? The selected tables are ' + this.gridOptions.api.getSelectedRows())
      },
      iconClick: function (event) {
        // `event` is the native DOM event
        if (event) {
          confirm('Do you want to delete the table ' + event.target.id + ' ?')
          this.tableId = event.target.id
        }
      },
      isDisabled () {
        if (this.gridOptions.api.getSelectedRows().length === 0) {
          console.log(this.gridOptions.api.getSelectedRows().length)
          return true
        } else {
          console.log(this.gridOptions.api.getSelectedRows().length)
          return false
        }
      }
    },
    created () {
      this.gridOptions = {
        enableColResize: true,
        enableSorting: true,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
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
