import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

import { LeaderComponent } from './leader.component';

const routes = [
    {
        path     : 'leader',
        component: LeaderComponent
    }
];

@NgModule({
    declarations: [
        LeaderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        MatTabsModule,
        FuseSharedModule
    ],
    exports     : [
        LeaderComponent
    ]
})

export class LeaderModule
{
}
