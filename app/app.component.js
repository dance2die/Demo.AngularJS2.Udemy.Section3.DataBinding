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
                        template: "\n        {{onTest()}}\n        <input type=\"text\" \n            [value]=\"name\" \n            (keyup)=\"onKeyUp(inputElement.value)\"\n            #inputElement\n            [ngClass]=\"{red: true}\">\n        <p>{{values}}</p>\n        <br />\n        <br />\n        <input type=\"text\" [(ngModel)]=\"name\">\n        <p>Your name: {{name}}</p>\n        \n        \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEtBQUssQ0FBQztvQkFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO2dCQVNoQixDQUFDO2dCQVBHLDZCQUFNLEdBQU47b0JBQ0ksTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsOEJBQU8sR0FBUCxVQUFRLEtBQWE7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJYQWNUO3FCQUNKLENBQUM7O2dDQUFBO2dCQVlGLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICB7e29uVGVzdCgpfX1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICBbdmFsdWVdPVwibmFtZVwiIFxuICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXAoaW5wdXRFbGVtZW50LnZhbHVlKVwiXG4gICAgICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7cmVkOiB0cnVlfVwiPlxuICAgICAgICA8cD57e3ZhbHVlc319PC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgICAgICA8cD5Zb3VyIG5hbWU6IHt7bmFtZX19PC9wPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lID0gXCJNYXhcIjtcbiAgICB2YWx1ZXMgPSAnJztcblxuICAgIG9uVGVzdCgpe1xuICAgICAgICByZXR1cm4gMSA9PT0gMTtcbiAgICB9XG5cbiAgICBvbktleVVwKHZhbHVlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
