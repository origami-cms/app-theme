import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';
import {Origami} from 'origami-core-lib/build/types';
import {component, property} from 'origami-zen/util/decorators';
import {getTemplates} from '../actions';

export interface AppProps {
    pageModel: Origami.Store.Schema;
    fieldsList: string[];
    fieldsCreate: string[];
    fieldsEdit: string[];
}


const BASE_FIELDS = [
    'title',
    'url',
    'type'
];


@component('app-theme')
export default class App extends connect(window.Origami.store)(LitElement) implements AppProps {
    @property
    templates?: {[name: string]: {
        properties: boolean | object,
        type: string
    }};

    @property
    get pageModel(): Origami.Store.Schema  {
        const options = Object.entries(this.templates || {}).map(([n]) => n);

        return {
            properties: {
                id: 'uuid',
                title: {
                    type: 'text',
                    required: true,
                    label: 'Title',
                    placeholder: 'About us'
                },
                url: {
                    type: 'text',
                    label: 'URL',
                    placeholder: '/about-us',
                    required: true
                },
                type: {
                    type: 'select',
                    label: 'Page template',
                    required: false,
                    disabled: Boolean(this.templates),
                    options
                }
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        window.Origami.store.dispatch<any>(getTemplates());
    }

    _stateChanged(s) {
        this.templates = s.Templates.templates;
    }

    _render({}: AppProps) {
        return html`<ui-resource-page
            resource="page"
            uribase="/theme/pages"
            model=${this.pageModel}

            fieldsList=${BASE_FIELDS}
            fieldsCreate=${BASE_FIELDS}
            fieldsEdit=${BASE_FIELDS}

            createElement="app-theme-page-create"
            editElement="app-theme-page-edit"

        ></ui-resource-page>`;
    }
}
