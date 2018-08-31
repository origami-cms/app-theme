import {LitElement, html} from '@polymer/lit-element';
import {component, property} from 'origami-zen/util/decorators';
import CSS from './browser-preview-css';

export interface BrowserPreviewProps {
    url?: string;
    content: string;
}

@component('ui-browser-preview')
export default class BrowserPreview extends LitElement implements BrowserPreviewProps {
    @property
    url?: string;

    @property
    get content() {
        return this._content;
    }
    set content(v: string) {
        this._content = v;
        const iframe = this._iframe;
        if (iframe) iframe.contentDocument!.body.innerHTML = v;
    }
    private _content: string = '';

    connectedCallback() {
        super.connectedCallback();
        if (this.content && this._iframe) this._iframe.contentDocument!.body.innerHTML = this.content;
    }

    private get _iframe() {
        return this.shadowRoot!.querySelector('iframe');
    }

    _render({url}: BrowserPreviewProps) {
        return html`
            ${CSS}
            <header>
                <span class="buttons"></span>
                <span class="address">${url}</span>
                ${url
                    ? html`<a href="${url}" target="_blank">
                        <zen-icon type="external-link" size="medium" color="alt"></zen-icon>
                    </a>`
                    : null
                }
            </header>
            <iframe></iframe>
        `;
    }
}
