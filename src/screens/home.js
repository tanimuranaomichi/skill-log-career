// グラフ画面
import React,{useState, useEffect} from 'react';
import './home.css'
import { Chart } from 'chart.js';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

//   const LineSample = () => {
//     const [skill, setSkill] = useState([])
//     useEffect(() => {
//         database.ref('UserA')
//           .orderByKey()
//           .limitToLast(10)
//           .on("value", (snapshot) => {
//             const messages = snapshot.val()
//             if (messages === null) return
//             const entries = Object.entries(messages)
//             const newMessages = entries.map((data) => {
//               const [key, message] = data
//               return { key, ...message }
//             })
//             setSkill(newMessages)
//           })
//       }, [])
//     console.log(skill)

export default function Visualize(){
var graph = {
    labels: [ "0", "1", "2", "3", "4" ],
    datasets: [{
       label: "Skill",
       lineTension: 0,
       backgroundColor: "rgba(255, 255, 255, 1)",
       borderColor: "rgba(0, 0, 255, 1)",
       borderCapStyle: 'round',
       borderDash: [4, 10],
       borderDashOffset: 1.0,
       borderJoinStyle: "round",
       pointBorderColor: "rgba(0, 0, 255, 1)",
       pointBackgroundColor: "rgba(0, 0, 255, 1)",
       pointBorderWidth: 4,
       pointHoverRadius: 10,
       pointHoverBackgroundColor: "rgba(0, 0, 255, 1)",
       pointHoverBorderColor: "rgba(255, 240, 15, 1)",
       pointHoverBorderWidth: 4,
       pointRadius: 1,
       pointHitRadius: 10,
       fill: false,
       spanGaps: false,
       data: []
    }],
 };
 var options = {
    responsive: true,
    title:{ display:true,
       text:'Skill Log'
    },
    scales: {
       xAxes: [{ display: true,
          scaleLabel: { display: true, labelString: 'Grade' }
       }],
       yAxes: [{ display: true,
          scaleLabel: { display: true, labelString: 'Skill' },
          ticks: { min: 0, max: 100, stepSize: 20 }
       }]
    }
 };
 /********************* 任意の縦線を引く為の処理 ***********************/
 var originalLineDraw = Chart.controllers.line.prototype.draw;
 Chart.helpers.extend(Chart.controllers.line.prototype, {
    draw: function(){
       originalLineDraw.apply(this, arguments);
       var chart = this.chart;
       var ctx = chart.chart.ctx;
       var index = chart.config.data.lineAtIndex;
       if (index){
          var xaxis = chart.scales['x-axis-0'];
          var yaxis = chart.scales['y-axis-0'];
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
          ctx.strokeStyle = '#ff0000';
          ctx.lineWidth = 1;
          ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
          ctx.stroke();
          ctx.restore();
       }
    }
 });

 window.addEventListener('DOMContentLoaded', function(){
    Chart.plugins.register({
       beforeDraw: function(c){
          var ctx = c.chart.ctx;
          ctx.fillStyle = "rgba(255, 255, 255, 1)";
          ctx.fillRect(0, 0, c.chart.width, c.chart.height);
       }
    });
    var canvas = document.getElementById("myChart");
    // console.log(canvas)
    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: graph,
        options: options,
    });
    var data = [43, 36, 17, 28, 51];
    data.forEach(function(e){
       graph.datasets[0].data.push(e);
    });
    /*** ３番目に 縦線を引く ***/
    graph.lineAtIndex = 3;

    myChart.update();
 });
 return (
    <div><canvas id="myChart"></canvas></div>
   );
}
