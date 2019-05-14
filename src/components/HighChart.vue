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
          width: 550,
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: null
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
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          floating: true,
        },
        series: [
          {
            type: 'pie',
            name: 'core',
            innerSize: '50%',
            center: ['80','70'],
            data: this.core(),
            showInLegend: true,
          },
          {
            type: 'pie',
            name: 'ram',
            innerSize: '50%',
            center: ['275','70'],
            data: this.ram(),
            showInLegend: false,
          },
        ],
        credits: {
          enabled: false,
        }
      }
    }
  },
  methods: {
    core: function () {
      return this.host.vms.map(function(o) {
        return {
          name: o.fqdn.split('.')[0],
          y: o.cores,
          dataLabels: {
            enabled: false
          }
        }
      })
    },
    ram: function () {
      return this.host.vms.map(function(o) {
        return {
          name: o.fqdn.split('.')[0],
          y: o.ram,
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
