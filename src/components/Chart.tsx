import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import * as d3 from 'd3'


function createPieChart() {


  let width = 600, height = 500, margin = 20 // размеры и отступы контейнера


  let radius = Math.min(width, height) / 2 - margin  // радиус графика на основе размеров контейнера

  console.log(d3.select('.pie-chart'))
  // let svg = d3.select(".pie-chart")  // добовляем наш график в блок
  //   .append("svg")
  //   .attr("width", width)
  //   .attr("height", height)
  //   .append("g")
  //   .attr("transform", `translate(${width / 2} , ${height / 2})`);


  // let data = {
  //   a: 9, 
  //   b: 20, 
  // } // объект с данными


  // let color = d3.scaleOrdinal()  // передаем цветовую схему для графика
  //   .domain(data)
  //   .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])


  // let pie = d3.pie()  // рассчитываем позицию для каждого куска графика
  //   .value(function(d) {return d.value; })
  // let data_ready = pie(d3.entries(data))

  
  // svg   // строим собственно круговую диаграмму используя функцию arc для отрисовки частей
  //   .selectAll('pies')
  //   .data(data_ready)
  //   .enter()
  //   .append('path')
  //   .attr('d', d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(radius)
  //   )
  //   .attr('fill', function(d){ return(color(d.data.key)) })
  //   .attr("stroke", "black")
  //   .style("stroke-width", "2px")
  //   .style("opacity", 0.7)

}


function Chart(props) {

  

  useEffect(() => {   // замена componentDidMount в данном случае
    createPieChart()
  });
  

  return (
    <Card className={`${props.showChart == 'true' ? 'showCard' : ''} chart`}>
      <CardContent>
        <div className="pie-chart"></div>
      </CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {showChart: state.button.showChart}
}


export default connect(mapStateToProps)(Chart)