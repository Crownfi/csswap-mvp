// auto-generated by C.E.W.T.
// DO NOT EDIT BY HAND!!
import { TokenDisplayElement } from "@crownfi/sei-webui-utils";
export class SwapItemComponentRefs {
	#element: HTMLElement | ShadowRoot;
	constructor(element: HTMLElement | ShadowRoot) {
		this.#element = element;
	}
	#selectedToken?: TokenDisplayElement;
	get selectedToken() {
		if (this.#selectedToken === undefined) {
			this.#selectedToken = this.#element.querySelector("[cewt-ref=\"selected-token\"]:not(:scope [is] *)")!;
		}
		return this.#selectedToken;
	}
	#selectedAmount?: HTMLSpanElement;
	get selectedAmount() {
		if (this.#selectedAmount === undefined) {
			this.#selectedAmount = this.#element.querySelector("[cewt-ref=\"selected-amount\"]:not(:scope [is] *)")!;
		}
		return this.#selectedAmount;
	}
	#selectedConvertedAmount?: HTMLSpanElement;
	get selectedConvertedAmount() {
		if (this.#selectedConvertedAmount === undefined) {
			this.#selectedConvertedAmount = this.#element.querySelector("[cewt-ref=\"selected-converted-amount\"]:not(:scope [is] *)")!;
		}
		return this.#selectedConvertedAmount;
	}
	#tokensDropdown?: HTMLElement;
	get tokensDropdown() {
		if (this.#tokensDropdown === undefined) {
			this.#tokensDropdown = this.#element.querySelector("[cewt-ref=\"tokens-dropdown\"]:not(:scope [is] *)")!;
		}
		return this.#tokensDropdown;
	}
}
let _templateSwapItemComponent: HTMLTemplateElement | null = null;
function getSwapItemComponentTemplate(): HTMLTemplateElement {
	if (_templateSwapItemComponent == null) {
		 _templateSwapItemComponent = document.createElement("template")
		 _templateSwapItemComponent.innerHTML = "\n  <div class=\"fantasy-input-group\">\n    <button class=\"fantasy primary\">\n      <span cewt-ref=\"selected-token\" is=\"token-display\"></span>\n      <i class=\"cicon cicon-size-xsmall cicon-gradient cicon-fantasy-chevron-down\"></i>\n    </button>\n\n    <div class=\"slider-container\">\n      <div class=\"slider-amounts\">\n        <span cewt-ref=\"selected-amount\" class=\"text-fantasy amount\">0</span>\n        <span cewt-ref=\"selected-converted-amount\" class=\"text-fantasy converted-amount\">~ $0</span>\n      </div>\n      <input type=\"range\" name=\"\" id=\"\">\n    </div>\n\n    <dropdown-menu click-trigger=\"primary\" linked-elements=\"*:has(+ * + #this)\" cewt-ref=\"tokens-dropdown\">\n    </dropdown-menu>\n  </div>\n";
	}
	return _templateSwapItemComponent;
}
export class SwapItemComponentAutogen extends HTMLDivElement {
	readonly refs: SwapItemComponentRefs;
	static get observedAttributes() {
		return ["token", "tokens"];
	}
	#attributeTokenValue: string | null = null;
	get token(): string | null {
		return this.#attributeTokenValue;
	}
	set token(v: string | null) {
		if (v == null) {
			this.removeAttribute("token");
		}else{
			this.setAttribute("token", v);
		}
	}
	protected onTokenChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	#attributeTokensValue: string | null = null;
	get tokens(): string | null {
		return this.#attributeTokensValue;
	}
	set tokens(v: string | null) {
		if (v == null) {
			this.removeAttribute("tokens");
		}else{
			this.setAttribute("tokens", v);
		}
	}
	protected onTokensChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		switch(name) {
			case "token":
				this.#attributeTokenValue = newValue;
				this.onTokenChanged(oldValue, newValue);
				break;
			case "tokens":
				this.#attributeTokensValue = newValue;
				this.onTokensChanged(oldValue, newValue);
				break;
			default:
				// Shouldn't happen
		}
	}
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				getSwapItemComponentTemplate()
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "swap-item-component"); // allow for easy query selecting
		this.refs = new SwapItemComponentRefs(this);
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
		customElements.define("swap-item-component", this, { extends: "div"});
	}
}
