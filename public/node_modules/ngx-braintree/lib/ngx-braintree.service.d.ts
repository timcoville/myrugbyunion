import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NgxBraintreeService {
    private http;
    constructor(http: HttpClient);
    getClientToken(clientTokenURL: string): Observable<string>;
    createPurchase(createPurchaseURL: string, nonce: string, chargeAmount: number): Observable<any>;
}
