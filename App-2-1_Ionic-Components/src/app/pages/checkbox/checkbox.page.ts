import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.page.html',
	styleUrls: ['./checkbox.page.scss']
})
export class CheckboxPage implements OnInit {
	public form = [
		{ val: 'Pepperoni', isChecked: true },
		{ val: 'Sausage', isChecked: false },
		{ val: 'Mushroom', isChecked: false }
	];

	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');
	}
}
