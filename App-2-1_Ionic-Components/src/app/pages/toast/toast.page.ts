import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.page.html',
	styleUrls: ['./toast.page.scss']
})
export class ToastPage implements OnInit {
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
