// auto-generated by C.E.W.T.
// DO NOT EDIT BY HAND!!
import { TokenDisplayElement } from "@crownfi/sei-webui-utils";
export class ConfirmSwapDialogComponentRefs {
	#element: HTMLElement | ShadowRoot;
	constructor(element: HTMLElement | ShadowRoot) {
		this.#element = element;
	}
	#from?: TokenDisplayElement;
	get from() {
		if (this.#from === undefined) {
			this.#from = this.#element.querySelector("[cewt-ref=\"from\"]:not(:scope [is] *)")!;
		}
		return this.#from;
	}
	#to?: TokenDisplayElement;
	get to() {
		if (this.#to === undefined) {
			this.#to = this.#element.querySelector("[cewt-ref=\"to\"]:not(:scope [is] *)")!;
		}
		return this.#to;
	}
	#slippageAmount?: HTMLSpanElement;
	get slippageAmount() {
		if (this.#slippageAmount === undefined) {
			this.#slippageAmount = this.#element.querySelector("[cewt-ref=\"slippage-amount\"]:not(:scope [is] *)")!;
		}
		return this.#slippageAmount;
	}
}
let _templateConfirmSwapDialogComponent: HTMLTemplateElement | null = null;
function getConfirmSwapDialogComponentTemplate(): HTMLTemplateElement {
	if (_templateConfirmSwapDialogComponent == null) {
		 _templateConfirmSwapDialogComponent = document.createElement("template")
		 _templateConfirmSwapDialogComponent.innerHTML = "\n  <div class=\"container\">\n    <div class=\"row space-between\">\n      <div class=\"col\">\n        <span class=\"label\">From</span>\n        <div class=\"badge\">\n          <span is=\"token-display\" cewt-ref=\"from\"></span>\n        </div>\n      </div>\n\n      <span class=\"cicon cicon-gradient primary cicon-size-large cicon-fantasy-arrow-right\"></span>\n\n      <div class=\"col\">\n        <span class=\"label\">To</span>\n        <div class=\"badge\">\n          <span is=\"token-display\" cewt-ref=\"to\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row gap-1\">\n      <span class=\"label\">Slippage tolerance</span>\n      <span class=\"badge\" cewt-ref=\"slippage-amount\">0.50%</span>\n    </div>\n  </div>\n\n  <p class=\"important-note warning\">\n    These values aren\'t guaranteed as other trades may be processed before yours.\n  </p>\n";
	}
	return _templateConfirmSwapDialogComponent;
}
export class ConfirmSwapDialogComponentAutogen extends HTMLDivElement {
	readonly refs: ConfirmSwapDialogComponentRefs;
	static get observedAttributes() {
		return ["fromAmount", "fromDenom", "toAmount", "toDenom"];
	}
	#attributeFromAmountValue: string | null = null;
	get fromAmount(): string | null {
		return this.#attributeFromAmountValue;
	}
	set fromAmount(v: string | null) {
		if (v == null) {
			this.removeAttribute("fromAmount");
		}else{
			this.setAttribute("fromAmount", v);
		}
	}
	protected onFromAmountChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	#attributeFromDenomValue: string | null = null;
	get fromDenom(): string | null {
		return this.#attributeFromDenomValue;
	}
	set fromDenom(v: string | null) {
		if (v == null) {
			this.removeAttribute("fromDenom");
		}else{
			this.setAttribute("fromDenom", v);
		}
	}
	protected onFromDenomChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	#attributeToAmountValue: string | null = null;
	get toAmount(): string | null {
		return this.#attributeToAmountValue;
	}
	set toAmount(v: string | null) {
		if (v == null) {
			this.removeAttribute("toAmount");
		}else{
			this.setAttribute("toAmount", v);
		}
	}
	protected onToAmountChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	#attributeToDenomValue: string | null = null;
	get toDenom(): string | null {
		return this.#attributeToDenomValue;
	}
	set toDenom(v: string | null) {
		if (v == null) {
			this.removeAttribute("toDenom");
		}else{
			this.setAttribute("toDenom", v);
		}
	}
	protected onToDenomChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		switch(name) {
			case "fromAmount":
				this.#attributeFromAmountValue = newValue;
				this.onFromAmountChanged(oldValue, newValue);
				break;
			case "fromDenom":
				this.#attributeFromDenomValue = newValue;
				this.onFromDenomChanged(oldValue, newValue);
				break;
			case "toAmount":
				this.#attributeToAmountValue = newValue;
				this.onToAmountChanged(oldValue, newValue);
				break;
			case "toDenom":
				this.#attributeToDenomValue = newValue;
				this.onToDenomChanged(oldValue, newValue);
				break;
			default:
				// Shouldn't happen
		}
	}
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				getConfirmSwapDialogComponentTemplate()
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "confirm-swap-dialog-component"); // allow for easy query selecting
		this.refs = new ConfirmSwapDialogComponentRefs(this);
	}
	connectedCallback() {
		// To be overridden by child class
	}
	disconnectedCallback() {
		// To be overridden by child class
	}
	adoptedCallback() {
		// To be overridden by child class
	}
	public static registerElement() {
		customElements.define("confirm-swap-dialog-component", this, { extends: "div"});
	}
}