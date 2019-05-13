<template>
  <div>
    <b-card class="card">
      <b-card-header style="max-width: 35rem; min-width: 30rem;">
        <b-row>
          <b-col class="center">
            <PieChart :id="`${id}-cpu`" :height="150" :width="150" :wedges="wedges1"></PieChart>
          </b-col>
          <b-col class="center">
            <PieChart :id="`${id}-ram`" :height="150" :width="150" :wedges="wedges2"></PieChart>
          </b-col>
        </b-row>
      </b-card-header>
      <b-card-body>
        <VMTable style="max-width: 35rem; min-width: 30rem;" :host="host"></VMTable>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'
import VMTable from '@/components/VMTable.vue'
export default {
  name: 'Host',
  components: { PieChart, VMTable },
  props: {
    host: Object,
  },
  computed: {
    id() {
      return this.host.fqdn.split('.')[0]
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
      console.log(collection);
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
      console.log(collection);
      return collection;
    },
  },
}
</script>

<style scoped>
.card {
  max-width: 35rem;
  min-width: 35rem;
  margin-bottom: 30px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
