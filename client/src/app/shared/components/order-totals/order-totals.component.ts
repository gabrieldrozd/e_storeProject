import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from "../../../basket/basket.service";
import {IBasketTotals} from "../../models/basket";
import {Observable} from "rxjs";

@Component({
    selector: 'app-order-totals',
    templateUrl: './order-totals.component.html',
    styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
    @Input() shippingPrice: number;
    @Input() subtotal: number;
    @Input() total: number;

    constructor(private basketService: BasketService) {
    }

    ngOnInit(): void {
    }

}
