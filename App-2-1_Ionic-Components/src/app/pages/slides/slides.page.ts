import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slides',
	templateUrl: './slides.page.html',
	styleUrls: ['./slides.page.scss']
})
export class SlidesPage implements OnInit {
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
