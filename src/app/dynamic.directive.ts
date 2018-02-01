import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[dynamic-host]',
})
export class AdDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}