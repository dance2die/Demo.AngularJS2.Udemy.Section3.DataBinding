import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'my-app',
    template: `

        <section class="child">
            <h2>This is the parent component</h2>
            
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name">
            <br />
            <br />
            <section class="child">
                <my-property-binding 
                    [myName]="name" 
                    [myAge]="36"
                    (hobbiesChanged)="hobbies = $event">
                </my-property-binding>
            </section>
            
            <p>My hobies are: {{hobbies}}</p>
        </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name = '';
    hobbies = '';
}
