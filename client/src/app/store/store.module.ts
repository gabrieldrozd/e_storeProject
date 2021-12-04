import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {SharedModule} from "../shared/shared.module";
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        StoreComponent,
        ProductItemComponent,
        ProductDetailsComponent
    ],
    exports: [
        StoreComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class StoreModule {
}
