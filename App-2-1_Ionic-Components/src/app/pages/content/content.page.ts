import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.page.html',
	styleUrls: [ './content.page.scss' ]
})
export class ContentPage implements OnInit {
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
