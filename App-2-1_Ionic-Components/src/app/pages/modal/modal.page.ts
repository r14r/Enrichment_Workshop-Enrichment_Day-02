import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.page.html',
	styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {
	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor() {
		// this.log('constructor');
	}

	ngOnInit() { this.log('ngOnInit'); }
}
