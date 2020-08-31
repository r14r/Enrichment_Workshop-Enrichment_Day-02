import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';

import { LearningHTMLPage } from './learning-html.page';

const routes: Routes = [
    {
        path: '',
        component: LearningHTMLPage
    }
];

@NgModule({
    declarations: [LearningHTMLPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LearningHTMLPageModule {}
