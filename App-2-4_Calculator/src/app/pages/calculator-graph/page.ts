import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Chart } from 'chart.js'

@Component({
	selector: 'app-calculator-graph',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class CalculatorGraphPage implements OnInit {
	@ViewChild('lineCanvas') lineCanvas: ElementRef
	@ViewChild('dataCanvas') dataCanvas: ElementRef

	private lineChart: Chart
	private dataChart: Chart

	data = {
		labels: [1, 2, 3, 4, 5],
		datasets: [
			{
				label: 'f(x) = x', // Name it as you want
				function: function(x) {
					return x
				},
				data: [], // Don't forget to add an empty data array, or else it will break
				borderColor: 'rgba(75, 192, 192, 1)',
				fill: false
			},
			{
				label: 'f(x) = x²',
				function: function(x) {
					return x * x
				},
				data: [],
				borderColor: 'rgba(153, 102, 255, 1)',
				fill: false
			}
		]
	}

	constructor() {
		Chart.pluginService.register({
			beforeInit: function(chart) {
				console.log('initializing chart')

				const data = chart.config.data

				for (let i = 0; i < data.datasets.length; i++) {
					console.log('Dataset ' + i)

					for (let j = 0; j < data.labels.length; j++) {
						console.log('Label ' + j + ' =' + data.labels[j])

						const fct = data.datasets[i].function

						console.log(data, fct)
						const x = data.labels[j]
						const y = fct(x)

						data.datasets[i].data.push(y)
					}
				}
			}
		})
	}

	ngOnInit() {
		this.lineChart = new Chart(this.lineCanvas.nativeElement, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: 'rgba(75,192,192,1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: 'rgba(75,192,192,1)',
						pointBackgroundColor: '#fff',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(75,192,192,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [65, 59, 80, 81, 56, 55, 40],
						spanGaps: false
					}
				]
			}
		})
	}
}
