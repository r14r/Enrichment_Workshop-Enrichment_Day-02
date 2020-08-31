import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: ['./loading.page.scss']
})
export class LoadingPage implements OnInit {
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
