import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const someCode = `class mat_button {
    constructor() {
        this.package = {
            execute: ['npx ng add @angular/material --interactive=false --theme=custom --gestures=true --animations=true'],
            moduleImports: [{ moduleName: 'MatButtonModule', link: '@angular/material/button' }]
        };
        this.defaultProperties = {
            text: "Hello World"
        };
        this.template = this.template.bind(this);
    }

    async template(props, layoutBuilder) {
        return \`<button mat-raised-button color="primary"> \${ props.text } </button>\`;
}
};`

@Injectable()
export class NetworkMock implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of (new HttpResponse({ body: someCode, status: 200 }));
    }
}
