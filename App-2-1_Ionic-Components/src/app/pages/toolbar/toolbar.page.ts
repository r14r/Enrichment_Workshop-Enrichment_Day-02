import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.page.html',
	styleUrls: ['./toolbar.page.scss']
})
export class ToolbarPage implements OnInit {
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
