import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-note',
	templateUrl: './note.page.html',
	styleUrls: ['./note.page.scss']
})
export class NotePage implements OnInit {
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
