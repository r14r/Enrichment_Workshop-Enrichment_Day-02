import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DemoGraphsPage } from './page'

describe('DemoGraphsPage', () => {
	let component: DemoGraphsPage
	let fixture: ComponentFixture<DemoGraphsPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DemoGraphsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(DemoGraphsPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
