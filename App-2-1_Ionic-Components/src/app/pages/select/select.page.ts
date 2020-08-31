import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select',
	templateUrl: './select.page.html',
	styleUrls: ['./select.page.scss']
})
export class SelectPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
