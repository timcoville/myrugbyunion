import { OnInit, OnDestroy, Renderer2 } from '@angular/core';
export declare class NgxBraintreeDirective implements OnInit, OnDestroy {
    private renderer;
    private document;
    script: any;
    constructor(renderer: Renderer2, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
