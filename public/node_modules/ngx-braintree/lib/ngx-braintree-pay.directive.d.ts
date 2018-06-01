import { OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { NgxBraintreeComponent } from './ngx-braintree.component';
export declare class NgxBraintreePayDirective implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private ngxBtComponent;
    constructor(elementRef: ElementRef, renderer: Renderer2, ngxBtComponent: NgxBraintreeComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
