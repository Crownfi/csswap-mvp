// auto-generated by acetewm
// DO NOT EDIT BY HAND!!
export class SwapComponentSlots {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _title?: HTMLSpanElement;
	get title() {
		if (this._title === undefined) {
			this._title = this._element.querySelector("[slot=\"title\"]") ?? document.createElement("span");
			this._title.slot = "title";
			this._element.appendChild(this._title);
		}
		return this._title;
	}
}
export class SwapComponentRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _tradeInput?: HTMLFormElementKnownControls<SwapComponentFormCollection1, SwapComponentFormValues1>;
	get tradeInput() {
		if (this._tradeInput === undefined) {
			this._tradeInput = this._element.shadowRoot!.querySelector("[ace-ref=\"trade-input\"]")!;
			this._tradeInput.values = normalizeFormValues.bind(this._tradeInput, this._tradeInput);
		}
		return this._tradeInput;
	}
	private _dynSelectPairs?: HTMLSelectElement;
	get dynSelectPairs() {
		if (this._dynSelectPairs === undefined) {
			this._dynSelectPairs = this._element.shadowRoot!.querySelector("[ace-ref=\"dyn-select-pairs\"]")!;
		}
		return this._dynSelectPairs;
	}
	private _inputDenom?: HTMLSpanElement;
	get inputDenom() {
		if (this._inputDenom === undefined) {
			this._inputDenom = this._element.shadowRoot!.querySelector("[ace-ref=\"input-denom\"]")!;
		}
		return this._inputDenom;
	}
	private _reverseBtn?: HTMLButtonElement;
	get reverseBtn() {
		if (this._reverseBtn === undefined) {
			this._reverseBtn = this._element.shadowRoot!.querySelector("[ace-ref=\"reverse-btn\"]")!;
		}
		return this._reverseBtn;
	}
	private _outputAmount?: HTMLSpanElement;
	get outputAmount() {
		if (this._outputAmount === undefined) {
			this._outputAmount = this._element.shadowRoot!.querySelector("[ace-ref=\"output-amount\"]")!;
		}
		return this._outputAmount;
	}
	private _outputDenom?: HTMLSpanElement;
	get outputDenom() {
		if (this._outputDenom === undefined) {
			this._outputDenom = this._element.shadowRoot!.querySelector("[ace-ref=\"output-denom\"]")!;
		}
		return this._outputDenom;
	}
	private _swapBtn?: HTMLButtonElement;
	get swapBtn() {
		if (this._swapBtn === undefined) {
			this._swapBtn = this._element.shadowRoot!.querySelector("[ace-ref=\"swap-btn\"]")!;
		}
		return this._swapBtn;
	}
}
export class SwapComponentAutogen extends HTMLElement {
	readonly slots: SwapComponentSlots;
	readonly refs: SwapComponentRefs;
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(
			(document.getElementById("ace-template-swap-component") as HTMLTemplateElement)
				.content
				.cloneNode(true)
		);
		this.slots = new SwapComponentSlots(this);
		this.refs = new SwapComponentRefs(this);
	}
	public static registerElement() {
		customElements.define("swap-component", this);
	}
}
export type SwapComponentFormCollection1 = HTMLFormControlsCollection & {
	"pair": HTMLSelectElement;
	namedItem(name: "pair"): HTMLSelectElement;
	"amount": HTMLInputElement;
	namedItem(name: "amount"): HTMLInputElement;
	"denom": HTMLInputElement;
	namedItem(name: "denom"): HTMLInputElement;
};
export type SwapComponentFormValues1 = {
	"pair": string;
	"amount": number;
	"denom": string;
};
interface HTMLFormElementKnownControls<C extends HTMLFormControlsCollection, V> extends HTMLFormElement {
	readonly elements: C;
	values: () => V;
};

// TODO: Make this part of a util lib instead of part of the autogen
export function normalizeFormValues(source: HTMLFormElement | SubmitEvent): any {
	const result: any = {};
	const [formElement, submitter] = (() => {
		if (source instanceof HTMLFormElement) {
			return [source, null];
		}
		return [source.target as HTMLFormElement, source.submitter];
	})();
	for (let i = 0; i < formElement.elements.length; i += 1) {
		const formControl = formElement.elements[i];
		if (formControl instanceof HTMLButtonElement) {
			if (formControl == submitter) {
				if (formControl.name) {
					result[formControl.name] = formControl.value;
				}
			}
		}else if (formControl instanceof HTMLInputElement) {
			switch(formControl.type) {
				case "checkbox": {
					result[formControl.name] = formControl.checked;
					break;
				}
				case "datetime-local": {
					result[formControl.name] = formControl.valueAsDate;
					break;
				}
				case "file": {
					result[formControl.name] = formControl.files;
					break;
				}
				case "number":
				case "range": {
					result[formControl.name] = formControl.valueAsNumber;
					break;
				}
				case "radio": {
					if (formControl.checked) {
						result[formControl.name] = formControl.value;
						break;
					}
				}
				default:
					result[formControl.name] = formControl.value;
			}
		}else if (
			formControl instanceof HTMLOutputElement ||
			formControl instanceof HTMLSelectElement ||
			formControl instanceof HTMLTextAreaElement
		) {
			result[formControl.name] = formControl.value;
		}
	}
	return result;
}
