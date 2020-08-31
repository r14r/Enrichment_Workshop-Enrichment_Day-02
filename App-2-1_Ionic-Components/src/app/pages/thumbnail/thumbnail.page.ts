import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-thumbnail',
	templateUrl: './thumbnail.page.html',
	styleUrls: ['./thumbnail.page.scss']
})
export class ThumbnailPage implements OnInit {
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
