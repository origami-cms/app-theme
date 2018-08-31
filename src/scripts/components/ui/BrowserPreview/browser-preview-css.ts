import {html} from '@polymer/lit-element';
export default html`<style>:host,:host *{box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;margin:0;padding:0;border:0;outline:0;font-size:100%;font:inherit;vertical-align:baseline}:host header span.address{border-radius:var(--border-radius)}:host{background:var(--card-bg, var(--color-white, #fff));border:var(--card-border, );border-radius:var(--card-border-radius, var(--border-radius, .4rem));padding:var(--card-padding, var(--size-main, 4rem));box-shadow:var(--card-shadow, var(--shadow-main-soft, 0 var(--size-tiny, 1rem) var(--size-main, 4rem) var(--color-main-soft, rgba(105,58,145,0.1))))}.font-base{font-size:var(--font-size-base)}.font-tiny{font-size:var(--font-size-tiny)}.font-small{font-size:var(--font-size-small)}.font-main{font-size:var(--font-size-main)}.font-large{font-size:var(--font-size-large)}.font-huge{font-size:var(--font-size-huge)}.font-super{font-size:var(--font-size-super)}.font-hero{font-size:var(--font-size-hero)}h1{font-size:var(--h1-font-size);font-family:var(--h1-font-family);font-weight:var(--h1-font-weight, 400);color:var(--h1-color, var(--color-text))}h2{font-size:var(--h2-font-size);font-family:var(--h2-font-family);font-weight:var(--h2-font-weight, 400);color:var(--h2-color, var(--color-text))}h3{font-size:var(--h3-font-size);font-family:var(--h3-font-family);font-weight:var(--h3-font-weight, 400);color:var(--h3-color, var(--color-text))}h4{font-size:var(--h4-font-size);font-family:var(--h4-font-family);font-weight:var(--h4-font-weight, 400);color:var(--h4-color, var(--color-text))}h5{font-size:var(--h5-font-size);font-family:var(--h5-font-family);font-weight:var(--h5-font-weight, 400);color:var(--h5-color, var(--color-text))}a,wc-link{text-decoration:none;cursor:pointer;color:var(--color-main)}small{font-size:var(--fs-small)}strong{font-weight:700;letter-spacing:1px}i{font-style:italic}.error{color:var(--color-error)}h2,h3{margin-bottom:var(--size-small)}:host{position:relative;padding:0}:host header{position:relative;height:calc(var(--input-height) + var(--size-small));line-height:calc(var(--input-height) + var(--size-small));background-color:var(--color-grey-200);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}:host header span.buttons,:host header span.buttons:before,:host header span.buttons:after{position:relative;display:inline-block;height:1rem;width:1rem;vertical-align:top;border-radius:50%;background:var(--color-white)}:host header span.buttons{margin-left:5rem;margin-top:0.75rem}:host header span.buttons:before,:host header span.buttons:after{content:''}:host header span.buttons:before{margin-left:-2rem}:host header span.buttons:after{margin-left:-3rem}:host header span.address{position:absolute;top:calc(var(--size-small) + .5rem);left:.5rem;right:.5rem;bottom:.5rem;background-color:var(--color-grey-50);line-height:2;padding-left:var(--size-tiny)}:host header zen-icon{position:absolute;right:.5rem;bottom:.5rem}:host iframe{position:absolute;top:calc(var(--input-height) + var(--size-small));width:100%;height:calc(100% - calc(var(--input-height) + var(--size-small)));border:.5rem solid var(--color-grey-200);border-top:none;border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}
</style>`;
