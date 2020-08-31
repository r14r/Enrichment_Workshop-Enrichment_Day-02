import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-backdrop',
	templateUrl: './backdrop.page.html',
	styleUrls: ['./backdrop.page.scss']
})
export class BackdropPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
