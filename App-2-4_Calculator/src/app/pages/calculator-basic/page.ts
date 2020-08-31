import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-calculator-basic',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class CalculatorPage implements OnInit {
	result = ''

	constructor() {}

	ngOnInit() {}

	btnClicked(btn) {
		console.log('CalculatorPage::btnClicked = ' + btn)
		if (btn === 'C') {
			this.result = ''
		} else if (btn === '=') {
			// tslint:disable-next-line: no-eval
			this.result = eval(this.result)
		} else if (btn === 'squareroot') {
			// tslint:disable-next-line: no-eval
			this.result = Math.sqrt(eval(this.result)) + ''
		} else if (btn === 'square') {
			// tslint:disable-next-line: no-eval
			this.result = eval('(' + this.result + ') * ( ' + this.result + ')')
		} else if (btn === 'reciproc') {
			// tslint:disable-next-line: no-eval
			this.result = eval(1 + '/ (' + this.result + ')')
		} else {
			this.result += btn
		}
	}
}
