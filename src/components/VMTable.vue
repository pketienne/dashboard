<template>
  <b-table
    class="guests"
    striped
    hover
    :small="true"
    :items="host.vms"
    :fields="fields">
  </b-table>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'VMTable',
  props: {
    host: Object,
    items: Array,
  },
  data() {
    return {
      fields: [
        { key: 'fqdn', sortable: true },
        { key: 'cores', sortable: true },
        { key: 'ram', sortable: true },
        { key: 'power', sortable: true },
        { key: 'status', sortable: true },
      ]
    }
  }
}
</script>

<style scoped>
</style>
