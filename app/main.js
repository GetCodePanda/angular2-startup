// import some default angular directives..
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_2 = require('@angular/core');
// ###################################### APP COMPONENT #################################
// creating main component for this app..
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_2.Component({
            selector: 'my-app',
            directives: [CricketerComponent],
            template: "\n       <h1>My Favorite cricketer ....</h1> \n       <cricketer> </cricketer>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//################################### CRICKETER COMPONENT ################################
// ################################## Structural directive ##############################
// // ######################   [ngIf]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <h2 *ngIf="cricketerList">list of best cricketer ...</h2>
//      `
// })
// export class CricketerComponent {
//     cricketerList:boolean = true;
//     //cricketerList:boolean = false;
// }
// // ######################   [ngFor]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <div*ngIf="cricketerList">
//             <h2>list of best cricketer ...</h2>
//             <ul>
//                 <li *ngFor="let cricketer of cricketers">
//                     {{cricketer}}
//                 </li>
//             </ul>
//         </div>
//      `
// })
// export class CricketerComponent {
//     cricketerList:boolean = true;
//     //cricketerList:boolean = false;
//     cricketers:string[] = [
//         'yuvi',
//         'dhoni',
//         'virat',
//         'raina',
//         'rohit'
//     ]
// }
// ######################   [ngFor]   #############################
var CricketerComponent = (function () {
    function CricketerComponent() {
        this.cricketerList = false;
        //cricketerList:boolean = true;
        this.cricketers = [
            'yuvi',
            'dhoni',
            'virat',
            'raina',
            'rohit'
        ];
        this.bestCricketer = 'yuvi';
    }
    CricketerComponent = __decorate([
        core_2.Component({
            selector: 'cricketer',
            template: "\n        <div*ngIf=\"cricketerList\">\n            <h2>list of best cricketer ...</h2>\n            <ul>\n                <li *ngFor=\"let cricketer of cricketers\">\n                    {{cricketer}}\n                </li>\n            </ul>\n        </div>\n\n        <div>\n            <span [ngSwitch]= \"bestCricketer\">\n                <span *ngSwitchCase=\"'yuvi'\"> yuvi is always awesome cricketer</span>\n                <span *ngSwitchCase=\"'dhoni'\"> dhoni is always awesome cricketer</span>\n                <span *ngSwitchDefault> virat is always awesome cricketer</span>\n            </span>\n        </div>\n     "
        }), 
        __metadata('design:paramtypes', [])
    ], CricketerComponent);
    return CricketerComponent;
}());
exports.CricketerComponent = CricketerComponent;
// initializing ur app..
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AppComponent, CricketerComponent],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// creatint a intance for platform .. 
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map