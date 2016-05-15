import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()}}
        <input type="text" [value]="name" [disabled]="1 === 1" [ngClass]="{red: true}">
    `,
})
export class AppComponent {
    name = "Max";

    onTest(){
        return 1 === 1;
    }
}
