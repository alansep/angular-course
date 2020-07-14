import { NgModule } from '@angular/core';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
    declarations: [
        SuccessAlertComponent,
        WarningAlertComponent
    ],
    exports: [
        SuccessAlertComponent,
        WarningAlertComponent
    ]
})
export class MyComponentsModule {
}
