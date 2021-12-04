import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IProduct} from "../shared/models/product";
import {IBrand} from '../shared/models/productBrand';
import {IType} from '../shared/models/productType';
import {StoreParams} from '../shared/models/storeParams';
import {StoreService} from "./store.service";

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    @ViewChild('search') searchPhrase: ElementRef;
    products: IProduct[];
    brands: IBrand[];
    types: IType[];
    storeParams = new StoreParams();
    totalCount: number;
    sortOptions = [
        {name: 'Alphabetical', value: 'name'},
        {name: 'Price: Low to High', value: 'priceAsc'},
        {name: 'Price: High to Low', value: 'priceDesc'}
    ];

    constructor(private storeService: StoreService) {
    }

    ngOnInit(): void {
        this.getProducts();
        this.getBrands();
        this.getTypes();
    }

    getProducts() {
        this.storeService.getProducts(this.storeParams).subscribe(response => {
            this.products = response.data;
            this.storeParams.pageNumber = response.pageIndex;
            this.storeParams.pageSize = response.pageSize;
            this.totalCount = response.count;
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
        this.storeParams.brandId = brandId;
        this.storeParams.pageNumber = 1;
        this.getProducts()
    }

    onTypeSelected(typeId: number) {
        this.storeParams.typeId = typeId;
        this.storeParams.pageNumber = 1;
        this.getProducts();
    }

    onSortSelected(sort: string) {
        this.storeParams.sort = sort;
        this.getProducts();
    }

    onPageChanged(event: any) {
        if (this.storeParams.pageNumber !== event) {
            this.storeParams.pageNumber = event;
            this.getProducts();
        }
    }

    onSearch() {
        this.storeParams.search = this.searchPhrase.nativeElement.value;
        this.getProducts();
    }

    onReset() {
        this.searchPhrase.nativeElement.value = '';
        this.storeParams = new StoreParams();
        this.getProducts();
    }
}
