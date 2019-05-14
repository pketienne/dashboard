<template>
  <div class="host">
    <b-card>
      <b-card-header>{{ host.fqdn }}</b-card-header>
      <b-card-body>
        <b-container>
          <b-row>
            <b-col class="center align-top">
              <!-- <PieChart :id="`${id}-cpu`" :height="150" :width="150" :wedges="wedges1"></PieChart> -->
              <HighChart :host="host"></HighChart>
              <HighChart :host="host"></HighChart>
            </b-col>
            <b-col class="center align-top">
              <!-- <PieChart :id="`${id}-ram`" :height="150" :width="150" :wedges="wedges2"></PieChart> -->
            </b-col>
            <b-col>
              <ul>
                <li v-for="vm in host.vms">{{ vm.fqdn.split('.')[0] }}</li>
                <li>unallocated</li>
              </ul>
            </b-col>
          </b-row>
          <b-row>
            <VMTable class="vmtable" :host="host"></VMTable>
          </b-row>
        </b-container>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'
import VMTable from '@/components/VMTable.vue'
import HighChart from '@/components/HighChart.vue'
export default {
  name: 'Host',
  components: { PieChart, VMTable, HighChart },
  props: {
    host: Object,
  },
  computed: {
    id() {
      return this.host.fqdn.split('.')[0]
    },
    vmid(vm) {
      return vm.fqdn.split('.')[0]
    },
    wedges1() {
      let collection = [];
      for (let i in this.host.vms) {
        collection.push(this.host.vms[i].cores / this.host.cores);
      }
      const sum = collection.reduce((partial_sum, a) => partial_sum + a,0);
      if(collection.length == 0) {
        collection.push(1);
      } else if(sum < this.host.cores) {
        collection.splice(0, 0, 1 - sum);
      }
      return collection;
    },
    wedges2() {
      let collection = [];
      for (let i in this.host.vms) {
        collection.push(this.host.vms[i].ram / this.host.ram);
      }
      const sum = collection.reduce((partial_sum, a) => partial_sum + a,0);
      if(collection.length == 0) {
        collection.push(1);
      } else if(sum < this.host.cores) {
        collection.splice(0, 0, 1 - sum);
      }
      return collection;
    },
  },
}
</script>

<style scoped>
.host {
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
}
.card {
  max-width: 35rem;
  min-width: 35rem;
  margin: 0;
  padding: 0;
}
.card-body {
  padding: 0;
}
.vmtable {
  max-width: 35rem;
  min-width: 30rem;
}
.col {
  padding: 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
