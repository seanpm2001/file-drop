function t(t,e,r,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,r,o):i(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o}function e(t,e,r){return{get(){const t=r.value.bind(this);return Object.defineProperty(this,e,{value:t}),t}}}function r(t,e){const r=e.toLowerCase().split(",").map(t=>t.trim().split("/").map(t=>t.trim())).filter(t=>2===t.length);return Array.from(t).find(t=>{if("file"!==t.kind)return!1;const[e,n]=t.type.toLowerCase().split("/").map(t=>t.trim());for(const[t,i]of r)if(e===t&&("*"===i||n===i))return!0;return!1})}function n(t,e){const n=r(t.items,e);if(n)return n.getAsFile()||void 0}class i extends Event{constructor(t,e){var r,n;super(t,e),(r=this)instanceof(n=i)||Object.setPrototypeOf(r,n.prototype),this._file=e.file,this._action=e.action}get action(){return this._action}get file(){return this._file}}class s extends HTMLElement{constructor(){super(),this._dragEnterCount=0,this.addEventListener("dragover",t=>t.preventDefault()),this.addEventListener("drop",this._onDrop),this.addEventListener("dragenter",this._onDragEnter),this.addEventListener("dragend",()=>this._reset()),this.addEventListener("dragleave",this._onDragLeave),this.addEventListener("paste",this._onPaste)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",t)}_onDragEnter(t){if(this._dragEnterCount+=1,this._dragEnterCount>1)return;const e=!t.dataTransfer.items.length||!!r(t.dataTransfer.items,this.accept);this.classList.add(e?"drop-valid":"drop-invalid")}_onDragLeave(){this._dragEnterCount-=1,0===this._dragEnterCount&&this._reset()}_onDrop(t){t.preventDefault(),this._reset();const e=n(t.dataTransfer,this.accept);void 0!==e&&this.dispatchEvent(new i("filedrop",{action:"drop",file:e}))}_onPaste(t){const e=n(t.clipboardData,this.accept);void 0!==e&&this.dispatchEvent(new i("filedrop",{action:"paste",file:e}))}_reset(){this._dragEnterCount=0,this.classList.remove("drop-valid"),this.classList.remove("drop-invalid")}}t([e],s.prototype,"_onDragEnter",null),t([e],s.prototype,"_onDragLeave",null),t([e],s.prototype,"_onDrop",null),t([e],s.prototype,"_onPaste",null),customElements.define("file-drop",s);export{e as bind,i as FileDropEvent,s as FileDrop};
//# sourceMappingURL=filedrop.mjs.map
