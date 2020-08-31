import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CalculatorGraphPage } from './page'

describe('CalculatorGraphPage', () => {
	let component: CalculatorGraphPage
	let fixture: ComponentFixture<CalculatorGraphPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CalculatorGraphPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorGraphPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
