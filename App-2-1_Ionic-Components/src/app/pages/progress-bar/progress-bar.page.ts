import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.page.html',
	styleUrls: ['./progress-bar.page.scss']
})
export class ProgressBarPage implements OnInit {
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
