import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
import { TitleServices } from './services/services';
@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        ...sharedConfig.imports
    ],
    providers: [
        TitleServices
    ]
})
export class AppModule {
}
