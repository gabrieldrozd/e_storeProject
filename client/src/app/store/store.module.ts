import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent
  ],
  exports: [
    StoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
