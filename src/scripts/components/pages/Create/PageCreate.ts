import Base from '../PageBase';
import pageActions from 'actions/Pages';
import {component} from 'origami-zen/util/decorators';
import CSS from './page-create-css';
import {html} from '@polymer/lit-element';


@component('app-theme-page-create')
export default class PageCreate extends Base {
    heading = 'Create a page';

    get fieldsTemplate() {
        const fieldsSuper = super.fieldsTemplate;
        const submit = fieldsSuper.slice(-1)[0];
        submit.value = 'Create page';

        return fieldsSuper;
    }

    _render() {
        return html`${CSS}
            <div class="card">
                ${this._renderFormPage()}
                ${this._renderFormTemplate()}
            </div>
        `;
    }

    async submit(values: object) {
        return await window.Origami.store.dispatch<any>(pageActions.pagesCreate(values));
    }

}
