import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

import { ActivitiesComponent } from './activities.component';

const routes = [
    {
        path     : 'activities',
        component: ActivitiesComponent
    }
];

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        MatTabsModule,
        FuseSharedModule
    ],
    exports     : [
        ActivitiesComponent
    ]
})

export class ActivitiesModule
{
}
