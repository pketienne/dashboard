<template>
  <div>
    <svg :id="id" :height="height" :width="width"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'PieChart',
  props: {
    id: String,
    height: Number,
    width: Number,
    wedges: Array,
  },
  mounted: function() {
    var svg = d3.select(`#${this.id}`),
      width = svg.attr('width'),
      height = svg.attr('height'),
      radius = (Math.min(width, height) / 2) - 5,
      g = svg.append("g").attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var color = d3.scaleOrdinal(['#ddd','#f00','#f80','#ff0','#0f0','#00f','#8b4513','#00ced1','#000080']);

    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    //Generate groups
    var arcs = g.selectAll('arc')
      .data(pie(this.wedges))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('stroke', 'black')
      .style('stroke-width', '2px')

    //Draw arc paths
    arcs.append('path')
      .attr('fill', function(d, i) {
        return color(i);
      })
      .attr('d', arc);
  },
}
</script>

<style scoped>
</style>
