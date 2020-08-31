import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);
  item;

  	PREFIX = this.constructor.name;
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '| ' + line);
	}
  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  onClick(){
    this.popoverCtrl.dismiss({
      item:this.item
    })
  }

}
