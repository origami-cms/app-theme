var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { Origami } from 'origami-core-lib/build/types';
import { component, property } from 'origami-zen/util/decorators';
let App = class App extends connect(window.Origami.store)(LitElement) {
    constructor() {
        super(...arguments);
        this.pageModel = {
            properties: {
                id: 'uuid',
                title: { type: 'text', required: true },
                type: { type: 'text', required: false },
                url: { type: 'text', required: true }
            }
        };
        // @property
        this.fieldsList = [
            'title',
            'type',
            'url'
        ];
        // @property
        this.fieldsCreate = [
            'title',
            'type',
            'url'
        ];
        // @property
        this.fieldsEdit = [
            'id',
            'title',
            'type',
            'url'
        ];
    }
    _stateChanged(s) {
        console.log(s);
    }
    _render({ pageModel, fieldsList, fieldsCreate, fieldsEdit }) {
        return html `<ui-resource-page
            resource="page"
            uribase="/theme/pages"
            model=${pageModel}
            fieldsList=${fieldsList}
            fieldsCreate=${fieldsCreate}
            fieldsEdit=${fieldsEdit}
        ></ui-resource-page>`;
    }
};
__decorate([
    property,
    __metadata("design:type", Object)
], App.prototype, "pageModel", void 0);
App = __decorate([
    component('app-theme')
], App);
export default App;
// window.customElements.define('app-theme', App);
