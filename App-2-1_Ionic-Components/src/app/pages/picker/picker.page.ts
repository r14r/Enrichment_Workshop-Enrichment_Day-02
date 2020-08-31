import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
	selector: 'app-picker',
	templateUrl: './picker.page.html',
	styleUrls: ['./picker.page.scss']
})
export class PickerPage implements OnInit {

	pickerControllerElement = document.querySelector('ion-picker-controller');
	defaultColumnOptions = [['Dog', 'Cat', 'Bird', 'Lizard', 'Chinchilla']]

	multiColumnOptions = [
		['Minified', 'Responsive', 'Full Stack', 'Mobile First', 'Serverless'],
		['Tomato', 'Avocado', 'Onion', 'Potato', 'Artichoke']
	];

	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}

	constructor(private pickerController: PickerController) {
		// this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');
	}


	async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) {
		const picker = await this.pickerController.create({
			columns: this.getColumns(numColumns, numOptions, columnOptions),
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Confirm',
					handler: (value) => {
						console.log(`Got Value ${value}`);
					}
				}
			]
		});

		await picker.present();
	}

	getColumns(numColumns, numOptions, columnOptions) {
		const columns = [];
		for (let i = 0; i < numColumns; i++) {
			columns.push({
				name: `col-${i}`,
				options: this.getColumnOptions(i, numOptions, columnOptions)
			});
		}

		return columns;
	}

	getColumnOptions(columnIndex, numOptions, columnOptions) {
		const options = [];
		for (let i = 0; i < numOptions; i++) {
			options.push({
				text: columnOptions[columnIndex][i % numOptions],
				value: i
			})
		}

		return options;
	}
}
