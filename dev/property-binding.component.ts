import {Component} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey {{name}}! and {{age}} years old</p>
    `,
    inputs: ['name:myName', 'age:myAge']
})
export class PropertyBindingComponent{
    name = '';
    age = '';
}