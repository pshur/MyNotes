"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(textNote, id) {
        this.id = id;
        this.textNote = textNote;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My notes';
        this.items = ITEMS;
    }
    AppComponent.prototype.addItem = function (textN) {
        if (textN == null || textN == undefined || textN.trim() == "")
            return;
        var id;
        id = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            id = item.id;
        }
        id = id + 1;
        this.items.push(new Item(textN, id));
    };
    AppComponent.prototype.removeItem = function (id) {
        var newItems = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id != id)
                newItems.push(new Item(item.textNote, item.id));
        }
        this.items = newItems;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        template: "\n    <div >\n        <h1> {{title}} </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"Note\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text)\">Add</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"id\" placeholder = \"Number note\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"removeItem(id)\">Remove</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel\">\n        <ul class=\"notes\">\n            <li>\n                <span class=\"badge\">ID</span>Note\n            </li>\n            <li *ngFor=\"let item of items\"> \n                <span class=\"badge\">{{item.id}}</span>{{item.textNote}}\n            </li>\n        </ul>\n    </div>        \n   ",
        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .notes {\n        margin: 0 0 2em 5em;\n        list-style-type: none;\n        padding: 0;\n        width: 45em;\n      }\n      .notes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 3em;\n        border-radius: 4px;\n      }\n      .notes li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .notes li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .notes .text {\n        position: relative;\n        top: -3px;\n      }\n      .notes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 2.2em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var ITEMS = [
    { id: 1, textNote: "Hello!" },
    { id: 2, textNote: "I am Pasha" },
    { id: 3, textNote: "Good morning" },
    { id: 4, textNote: "What do you do?" }
];
//# sourceMappingURL=app.component.js.map