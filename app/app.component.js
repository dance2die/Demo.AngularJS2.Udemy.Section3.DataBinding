System.register(['angular2/core', "./property-binding.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                    this.hobbies = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"child\">\n            <h2>This is the parent component</h2>\n            \n            <h4>Please enter your name</h4>\n            <input type=\"text\" [(ngModel)]=\"name\">\n            <br />\n            <br />\n            <section class=\"child\">\n                <my-property-binding \n                    [myName]=\"name\" \n                    [myAge]=\"36\"\n                    (hobbiesChanged)=\"hobbies = $event\">\n                </my-property-binding>\n            </section>\n            \n            <p>My hobies are: {{hobbies}}</p>\n        </section>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQTNCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsa21CQW1CVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxxREFBd0IsQ0FBQztxQkFDekMsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVDQUdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICA8aDI+VGhpcyBpcyB0aGUgcGFyZW50IGNvbXBvbmVudDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxoND5QbGVhc2UgZW50ZXIgeW91ciBuYW1lPC9oND5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICA8bXktcHJvcGVydHktYmluZGluZyBcbiAgICAgICAgICAgICAgICAgICAgW215TmFtZV09XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIFtteUFnZV09XCIzNlwiXG4gICAgICAgICAgICAgICAgICAgIChob2JiaWVzQ2hhbmdlZCk9XCJob2JiaWVzID0gJGV2ZW50XCI+XG4gICAgICAgICAgICAgICAgPC9teS1wcm9wZXJ0eS1iaW5kaW5nPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cD5NeSBob2JpZXMgYXJlOiB7e2hvYmJpZXN9fTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lID0gJyc7XG4gICAgaG9iYmllcyA9ICcnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
