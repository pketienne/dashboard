<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <PieChart :id="`${id}-cpu`" :height="150" :width="150" :wedges="wedges1"></PieChart>
          <PieChart :id="`${id}-ram`" :height="150" :width="150" :wedges="wedges2"></PieChart>
        </b-col>
        <b-col>
          <VMTable :host="host"></VMTable>
        </b-col>
      </b-row>
    </b-container>
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
</style>
