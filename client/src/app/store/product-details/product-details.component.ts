import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from "../../shared/models/product";
import {StoreService} from '../store.service';
import {BreadcrumbService} from "xng-breadcrumb";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    product: IProduct;

    constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute,
                private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.set('@productDetails', ' ');
    }

    ngOnInit(): void {
        this.loadProduct()
    }

    // + w getProduct zamienia string na liczbe, activatedRoute daje dostep do root componenta, czyli do listy produktow w tym przypadku
    loadProduct() {
        this.storeService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
            this.product = response;
            this.breadcrumbService.set('@productDetails', this.product.name);
        }, error => {
            console.log(error);
        });
    }
}