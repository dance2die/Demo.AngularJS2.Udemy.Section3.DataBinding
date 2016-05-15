System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Max";
                    this.values = '';
                }
                AppComponent.prototype.onTest = function () {
                    return 1 === 1;
                };
                AppComponent.prototype.onKeyUp = function (value) {
                    this.values += value + ' | ';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        {{onTest()}}\n        <input type=\"text\" \n            [value]=\"name\" \n            (keyup)=\"onKeyUp(inputElement.value)\"\n            #inputElement\n            [ngClass]=\"{red: true}\">\n        <p>{{values}}</p>\n        \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLFdBQU0sR0FBRyxFQUFFLENBQUM7Z0JBU2hCLENBQUM7Z0JBUEcsNkJBQU0sR0FBTjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCw4QkFBTyxHQUFQLFVBQVEsS0FBYTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUseVBBU1Q7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBWUYsbUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIHt7b25UZXN0KCl9fVxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIFt2YWx1ZV09XCJuYW1lXCIgXG4gICAgICAgICAgICAoa2V5dXApPVwib25LZXlVcChpbnB1dEVsZW1lbnQudmFsdWUpXCJcbiAgICAgICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntyZWQ6IHRydWV9XCI+XG4gICAgICAgIDxwPnt7dmFsdWVzfX08L3A+XG4gICAgICAgIFxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbmFtZSA9IFwiTWF4XCI7XG4gICAgdmFsdWVzID0gJyc7XG5cbiAgICBvblRlc3QoKXtcbiAgICAgICAgcmV0dXJuIDEgPT09IDE7XG4gICAgfVxuXG4gICAgb25LZXlVcCh2YWx1ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy52YWx1ZXMgKz0gdmFsdWUgKyAnIHwgJztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
