// auto-generated by C.E.W.T.
// DO NOT EDIT BY HAND!!
export class SortByComponentRefs {
	#element: HTMLElement | ShadowRoot;
	constructor(element: HTMLElement | ShadowRoot) {
		this.#element = element;
	}
	#tokensDropdown?: HTMLElement;
	get tokensDropdown() {
		if (this.#tokensDropdown === undefined) {
			this.#tokensDropdown = this.#element.querySelector("[cewt-ref=\"tokens-dropdown\"]:not(:scope [is] *)")!;
		}
		return this.#tokensDropdown;
	}
}
let _templateSortByComponent: HTMLTemplateElement | null = null;
function getSortByComponentTemplate(): HTMLTemplateElement {
	if (_templateSortByComponent == null) {
		 _templateSortByComponent = document.createElement("template")
		 _templateSortByComponent.innerHTML = "\n  Sort By\n  <span class=\"cicon cicon-tornado cicon-size-small primary cicon-gradient\"></span>\n  <dropdown-menu click-trigger=\"primary\" cewt-ref=\"tokens-dropdown\" linked-elements=\"button:has(#this)\" open-position=\"element-bottom-leftward\">\n    <dropdown-menu-item>\n      <span>Alphabetical</span>\n      <input type=\"radio\" name=\"choice\" value=\"alphabetical\">\n    </dropdown-menu-item>\n\n    <dropdown-menu-item>\n      <span>Total Value Deposited</span>\n      <input type=\"radio\" name=\"choice\" value=\"tvd\">\n    </dropdown-menu-item>\n\n    <dropdown-menu-item>\n      <span>User Value Deposited</span>\n      <input type=\"radio\" name=\"choice\" value=\"uvd\">\n    </dropdown-menu-item>\n\n    <dropdown-menu-item>\n      <span>Est. APY</span>\n      <input type=\"radio\" name=\"choice\" value=\"apy\">\n    </dropdown-menu-item>\n\n    <dropdown-menu-item>\n      <span>Fees</span>\n      <input type=\"radio\" name=\"choice\" value=\"fees\">\n    </dropdown-menu-item>\n  </dropdown-menu>\n";
	}
	return _templateSortByComponent;
}
export class SortByComponentAutogen extends HTMLButtonElement {
	readonly refs: SortByComponentRefs;
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				getSortByComponentTemplate()
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "sort-by-component"); // allow for easy query selecting
		this.refs = new SortByComponentRefs(this);
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
		customElements.define("sort-by-component", this, { extends: "button"});
	}
}
