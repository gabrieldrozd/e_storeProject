import { Component, OnInit } from '@angular/core';
import {IProduct} from "../shared/models/product";
import { IBrand } from '../shared/models/productBrand';
import { IType } from '../shared/models/productType';
import {StoreService} from "./store.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  brandIdSelected: number = 0;
  typeIdSelected: number = 0;
  sortSelected = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.storeService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected).subscribe(response =>{
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.storeService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: "All"}, ...response];
    }, error => {
      console.log(error);
    });
  }

  getTypes() {
    this.storeService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: "All"}, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts()
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.sortSelected = sort;
    this.getProducts();
  }
}
