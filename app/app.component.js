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
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"child\">\n            <h2>This is the parent component</h2>\n            \n            <h4>Please enter your name</h4>\n            <input type=\"text\" [(ngModel)]=\"name\">\n            <br />\n            <br />\n            <section class=\"child\">\n                <my-property-binding [myName]=\"name\" [myAge]=\"36\"></my-property-binding>\n            </section>\n        </section>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQXBCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNGFBYVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscURBQXdCLENBQUM7cUJBQ3pDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vcHJvcGVydHktYmluZGluZy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgPGgyPlRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQ8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDQ+UGxlYXNlIGVudGVyIHlvdXIgbmFtZTwvaDQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgPG15LXByb3BlcnR5LWJpbmRpbmcgW215TmFtZV09XCJuYW1lXCIgW215QWdlXT1cIjM2XCI+PC9teS1wcm9wZXJ0eS1iaW5kaW5nPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG5hbWUgPSAnJztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
