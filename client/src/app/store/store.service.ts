import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../shared/models/pagination";
import {IBrand} from "../shared/models/productBrand";
import {StoreParams} from "../shared/models/storeParams";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    baseUrl = 'https://localhost:5001/api/'

    constructor(private http: HttpClient) {
    }

    getProducts(storeParams: StoreParams) {
        let params = new HttpParams();

        if (storeParams.brandId !== 0) {
            params = params.append('brandId', storeParams.brandId.toString());
        }

        if (storeParams.typeId !== 0) {
            params = params.append('typeId', storeParams.typeId.toString());
        }

        params = params.append('sort', storeParams.sort);
        params = params.append('pageIndex', storeParams.pageNumber.toString());
        params = params.append('pageSize', storeParams.pageSize.toString());

        return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    getBrands() {
        return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
    }

    getTypes() {
        return this.http.get<IBrand[]>(this.baseUrl + 'products/types');
    }
}
