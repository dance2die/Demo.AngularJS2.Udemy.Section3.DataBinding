import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()}}
        <input type="text" 
            [value]="name" 
            (keyup)="onKeyUp(inputElement.value)"
            #inputElement
            [ngClass]="{red: true}">
        <p>{{values}}</p>
        
    `,
})
export class AppComponent {
    name = "Max";
    values = '';

    onTest(){
        return 1 === 1;
    }

    onKeyUp(value: string){
        this.values += value + ' | ';
    }
}
