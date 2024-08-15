// auto-generated by C.E.W.T.
// DO NOT EDIT BY HAND!!
export class AppContainerComponentRefs {
	#element: HTMLElement | ShadowRoot;
	constructor(element: HTMLElement | ShadowRoot) {
		this.#element = element;
	}
	#appTabs?: HTMLMenuElement;
	get appTabs() {
		if (this.#appTabs === undefined) {
			this.#appTabs = this.#element.querySelector("[cewt-ref=\"app-tabs\"]:not(:scope [is] *)")!;
		}
		return this.#appTabs;
	}
	#appContent?: HTMLDivElement;
	get appContent() {
		if (this.#appContent === undefined) {
			this.#appContent = this.#element.querySelector("[cewt-ref=\"app-content\"]:not(:scope [is] *)")!;
		}
		return this.#appContent;
	}
}
let _templateAppContainerComponent: HTMLTemplateElement | null = null;
function getAppContainerComponentTemplate(): HTMLTemplateElement {
	if (_templateAppContainerComponent == null) {
		 _templateAppContainerComponent = document.createElement("template")
		 _templateAppContainerComponent.innerHTML = "\n  <div class=\"container framed-box-small-smooth\">\n    <menu is=\"fantasy-tabs\" cewt-ref=\"app-tabs\">\n      <li data-value=\"farm\">\n        <span class=\"cicon cicon-size-large cicon-fantasy-farm cicon-gradient primary\"></span>\n        <span class=\"text-large\">FARM</span>\n      </li>\n  \n      <li data-value=\"swap\">\n        <span class=\"cicon cicon-size-large cicon-fantasy-arrows-clockwise cicon-gradient primary\"></span>\n        <span class=\"text-large\">SWAP</span>\n      </li>\n    </menu>\n\n    <div cewt-ref=\"app-content\" id=\"app-content\"></div>\n  </div>\n";
	}
	return _templateAppContainerComponent;
}
export class AppContainerComponentAutogen extends HTMLElement {
	readonly refs: AppContainerComponentRefs;
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				getAppContainerComponentTemplate()
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "app-container-component"); // allow for easy query selecting
		this.refs = new AppContainerComponentRefs(this);
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
		customElements.define("app-container-component", this, { extends: "main"});
	}
}
