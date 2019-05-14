<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
export default {
  name: 'HighChart',
  components: { highcharts: Chart },
  props: {
    host: Object,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          chartBackgroundColor: null,
          chartBorderWidth: 0,
          plotShadow: false,
          height: 200,
          width: 200,
        },
        title: {
          text: 'Cores',
          align: 'center',
          verticalAlign: 'middle',
          y: 5
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: this.hostData()
          }
        ],
        credits: {
          enabled: false,
        }
      }
    }
  },
  methods: {
    hostData: function () {
      return this.host.vms.map(function(o) {
        return {
          name: o.fqdn.split('.')[0],
          y: o.cores,
          dataLabels: {
            enabled: false
          }
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
