// auto-generated by acetewm
// DO NOT EDIT BY HAND!!
export class FarmPoolComponentRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _bigChestTvl?: HTMLSpanElement;
	get bigChestTvl() {
		if (this._bigChestTvl === undefined) {
			this._bigChestTvl = this._element.querySelector("[ace-ref=\"big-chest-tvl\"]:not(:scope [is] *)")!;
		}
		return this._bigChestTvl;
	}
	private _bigChestTotalTraded?: HTMLSpanElement;
	get bigChestTotalTraded() {
		if (this._bigChestTotalTraded === undefined) {
			this._bigChestTotalTraded = this._element.querySelector("[ace-ref=\"big-chest-total-traded\"]:not(:scope [is] *)")!;
		}
		return this._bigChestTotalTraded;
	}
	private _bigChestVolume24H?: HTMLSpanElement;
	get bigChestVolume24H() {
		if (this._bigChestVolume24H === undefined) {
			this._bigChestVolume24H = this._element.querySelector("[ace-ref=\"big-chest-volume-24h\"]:not(:scope [is] *)")!;
		}
		return this._bigChestVolume24H;
	}
	private _allPoolBtn?: HTMLButtonElement;
	get allPoolBtn() {
		if (this._allPoolBtn === undefined) {
			this._allPoolBtn = this._element.querySelector("[ace-ref=\"all-pool-btn\"]:not(:scope [is] *)")!;
		}
		return this._allPoolBtn;
	}
	private _myPoolBtn?: HTMLButtonElement;
	get myPoolBtn() {
		if (this._myPoolBtn === undefined) {
			this._myPoolBtn = this._element.querySelector("[ace-ref=\"my-pool-btn\"]:not(:scope [is] *)")!;
		}
		return this._myPoolBtn;
	}
	private _poolSearchText?: HTMLInputElement;
	get poolSearchText() {
		if (this._poolSearchText === undefined) {
			this._poolSearchText = this._element.querySelector("[ace-ref=\"pool-search-text\"]:not(:scope [is] *)")!;
		}
		return this._poolSearchText;
	}
	private _poolList?: HTMLDivElement;
	get poolList() {
		if (this._poolList === undefined) {
			this._poolList = this._element.querySelector("[ace-ref=\"pool-list\"]:not(:scope [is] *)")!;
		}
		return this._poolList;
	}
}
export class FarmPoolComponentAutogen extends HTMLDivElement {
	readonly refs: FarmPoolComponentRefs;
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				(document.getElementById("ace-template-farm-pool-component") as HTMLTemplateElement)
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "farm-pool-component"); // allow for easy query selecting
		this.refs = new FarmPoolComponentRefs(this);
	}
	public static registerElement() {
		customElements.define("farm-pool-component", this, { extends: "div"});
	}
}
export class FarmPoolItemRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _btnStar?: HTMLButtonElement;
	get btnStar() {
		if (this._btnStar === undefined) {
			this._btnStar = this._element.querySelector("[ace-ref=\"btn-star\"]:not(:scope [is] *)")!;
		}
		return this._btnStar;
	}
	private _iconToken0?: HTMLImageElement;
	get iconToken0() {
		if (this._iconToken0 === undefined) {
			this._iconToken0 = this._element.querySelector("[ace-ref=\"icon-token0\"]:not(:scope [is] *)")!;
		}
		return this._iconToken0;
	}
	private _iconToken1?: HTMLImageElement;
	get iconToken1() {
		if (this._iconToken1 === undefined) {
			this._iconToken1 = this._element.querySelector("[ace-ref=\"icon-token1\"]:not(:scope [is] *)")!;
		}
		return this._iconToken1;
	}
	private _poolName?: HTMLDivElement;
	get poolName() {
		if (this._poolName === undefined) {
			this._poolName = this._element.querySelector("[ace-ref=\"pool-name\"]:not(:scope [is] *)")!;
		}
		return this._poolName;
	}
	private _totalDeposits?: HTMLDivElement;
	get totalDeposits() {
		if (this._totalDeposits === undefined) {
			this._totalDeposits = this._element.querySelector("[ace-ref=\"total-deposits\"]:not(:scope [is] *)")!;
		}
		return this._totalDeposits;
	}
	private _volume24H?: HTMLDivElement;
	get volume24H() {
		if (this._volume24H === undefined) {
			this._volume24H = this._element.querySelector("[ace-ref=\"volume-24h\"]:not(:scope [is] *)")!;
		}
		return this._volume24H;
	}
	private _feeRate?: HTMLDivElement;
	get feeRate() {
		if (this._feeRate === undefined) {
			this._feeRate = this._element.querySelector("[ace-ref=\"fee-rate\"]:not(:scope [is] *)")!;
		}
		return this._feeRate;
	}
	private _apy?: HTMLDivElement;
	get apy() {
		if (this._apy === undefined) {
			this._apy = this._element.querySelector("[ace-ref=\"apy\"]:not(:scope [is] *)")!;
		}
		return this._apy;
	}
	private _userDeposits?: HTMLDivElement;
	get userDeposits() {
		if (this._userDeposits === undefined) {
			this._userDeposits = this._element.querySelector("[ace-ref=\"user-deposits\"]:not(:scope [is] *)")!;
		}
		return this._userDeposits;
	}
	private _userNet?: HTMLDivElement;
	get userNet() {
		if (this._userNet === undefined) {
			this._userNet = this._element.querySelector("[ace-ref=\"user-net\"]:not(:scope [is] *)")!;
		}
		return this._userNet;
	}
	private _btnExpand?: HTMLButtonElement;
	get btnExpand() {
		if (this._btnExpand === undefined) {
			this._btnExpand = this._element.querySelector("[ace-ref=\"btn-expand\"]:not(:scope [is] *)")!;
		}
		return this._btnExpand;
	}
}
export class FarmPoolItemAutogen extends HTMLDivElement {
	readonly refs: FarmPoolItemRefs;
	static get observedAttributes() {
		return ["pool"];
	}
	private _attributePoolValue: string | null = null;
	get pool(): string | null {
		return this._attributePoolValue;
	}
	set pool(v: string | null) {
		if (v == null) {
			this.removeAttribute("pool");
		}else{
			this.setAttribute("pool", v);
		}
	}
	protected onPoolChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		switch(name) {
			case "pool":
				this._attributePoolValue = newValue;
				this.onPoolChanged(oldValue, newValue);
				break;
			default:
				// Shouldn't happen
		}
	}
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				(document.getElementById("ace-template-farm-pool-item") as HTMLTemplateElement)
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "farm-pool-item"); // allow for easy query selecting
		this.refs = new FarmPoolItemRefs(this);
	}
	public static registerElement() {
		customElements.define("farm-pool-item", this, { extends: "div"});
	}
}
export class FarmPoolItemOptionsRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _depositTxt?: HTMLSpanElement;
	get depositTxt() {
		if (this._depositTxt === undefined) {
			this._depositTxt = this._element.querySelector("[ace-ref=\"deposit-txt\"]:not(:scope [is] *)")!;
		}
		return this._depositTxt;
	}
	private _depositBtn?: HTMLButtonElement;
	get depositBtn() {
		if (this._depositBtn === undefined) {
			this._depositBtn = this._element.querySelector("[ace-ref=\"deposit-btn\"]:not(:scope [is] *)")!;
		}
		return this._depositBtn;
	}
	private _withdrawTxt?: HTMLSpanElement;
	get withdrawTxt() {
		if (this._withdrawTxt === undefined) {
			this._withdrawTxt = this._element.querySelector("[ace-ref=\"withdraw-txt\"]:not(:scope [is] *)")!;
		}
		return this._withdrawTxt;
	}
	private _withdrawBtn?: HTMLButtonElement;
	get withdrawBtn() {
		if (this._withdrawBtn === undefined) {
			this._withdrawBtn = this._element.querySelector("[ace-ref=\"withdraw-btn\"]:not(:scope [is] *)")!;
		}
		return this._withdrawBtn;
	}
}
export class FarmPoolItemOptionsAutogen extends HTMLDivElement {
	readonly refs: FarmPoolItemOptionsRefs;
	static get observedAttributes() {
		return ["pool"];
	}
	private _attributePoolValue: string | null = null;
	get pool(): string | null {
		return this._attributePoolValue;
	}
	set pool(v: string | null) {
		if (v == null) {
			this.removeAttribute("pool");
		}else{
			this.setAttribute("pool", v);
		}
	}
	protected onPoolChanged(oldValue: string | null, newValue: string | null) {
		// To be overridden by child class
	}
	attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
		switch(name) {
			case "pool":
				this._attributePoolValue = newValue;
				this.onPoolChanged(oldValue, newValue);
				break;
			default:
				// Shouldn't happen
		}
	}
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				(document.getElementById("ace-template-farm-pool-item-options") as HTMLTemplateElement)
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "farm-pool-item-options"); // allow for easy query selecting
		this.refs = new FarmPoolItemOptionsRefs(this);
	}
	public static registerElement() {
		customElements.define("farm-pool-item-options", this, { extends: "div"});
	}
}
export class FarmPoolDepositDialogRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _form?: HTMLFormElementKnownControls<FarmPoolDepositDialogFormCollection1, FarmPoolDepositDialogFormValues1>;
	get form() {
		if (this._form === undefined) {
			this._form = this._element.querySelector("[ace-ref=\"form\"]:not(:scope [is] *)")!;
			this._form.values = normalizeFormValues.bind(this._form, this._form);
		}
		return this._form;
	}
	private _denomToken0?: HTMLSpanElement;
	get denomToken0() {
		if (this._denomToken0 === undefined) {
			this._denomToken0 = this._element.querySelector("[ace-ref=\"denom-token0\"]:not(:scope [is] *)")!;
		}
		return this._denomToken0;
	}
	private _balanceToken0?: HTMLSpanElement;
	get balanceToken0() {
		if (this._balanceToken0 === undefined) {
			this._balanceToken0 = this._element.querySelector("[ace-ref=\"balance-token0\"]:not(:scope [is] *)")!;
		}
		return this._balanceToken0;
	}
	private _denomToken1?: HTMLSpanElement;
	get denomToken1() {
		if (this._denomToken1 === undefined) {
			this._denomToken1 = this._element.querySelector("[ace-ref=\"denom-token1\"]:not(:scope [is] *)")!;
		}
		return this._denomToken1;
	}
	private _balanceToken1?: HTMLSpanElement;
	get balanceToken1() {
		if (this._balanceToken1 === undefined) {
			this._balanceToken1 = this._element.querySelector("[ace-ref=\"balance-token1\"]:not(:scope [is] *)")!;
		}
		return this._balanceToken1;
	}
	private _denomResult?: HTMLSpanElement;
	get denomResult() {
		if (this._denomResult === undefined) {
			this._denomResult = this._element.querySelector("[ace-ref=\"denom-result\"]:not(:scope [is] *)")!;
		}
		return this._denomResult;
	}
	private _balanceResult?: HTMLSpanElement;
	get balanceResult() {
		if (this._balanceResult === undefined) {
			this._balanceResult = this._element.querySelector("[ace-ref=\"balance-result\"]:not(:scope [is] *)")!;
		}
		return this._balanceResult;
	}
	private _btnCancel?: HTMLButtonElement;
	get btnCancel() {
		if (this._btnCancel === undefined) {
			this._btnCancel = this._element.querySelector("[ace-ref=\"btn-cancel\"]:not(:scope [is] *)")!;
		}
		return this._btnCancel;
	}
}
export class FarmPoolDepositDialogAutogen extends HTMLDialogElement {
	readonly refs: FarmPoolDepositDialogRefs;
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				(document.getElementById("ace-template-farm-pool-deposit-dialog") as HTMLTemplateElement)
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "farm-pool-deposit-dialog"); // allow for easy query selecting
		this.refs = new FarmPoolDepositDialogRefs(this);
	}
	public static registerElement() {
		customElements.define("farm-pool-deposit-dialog", this, { extends: "dialog"});
	}
}
export class FarmPoolWithdrawDialogRefs {
	private _element: HTMLElement;
	constructor(element: HTMLElement) {
		this._element = element;
	}
	private _form?: HTMLFormElementKnownControls<FarmPoolWithdrawDialogFormCollection2, FarmPoolWithdrawDialogFormValues2>;
	get form() {
		if (this._form === undefined) {
			this._form = this._element.querySelector("[ace-ref=\"form\"]:not(:scope [is] *)")!;
			this._form.values = normalizeFormValues.bind(this._form, this._form);
		}
		return this._form;
	}
	private _denom?: HTMLSpanElement;
	get denom() {
		if (this._denom === undefined) {
			this._denom = this._element.querySelector("[ace-ref=\"denom\"]:not(:scope [is] *)")!;
		}
		return this._denom;
	}
	private _balance?: HTMLSpanElement;
	get balance() {
		if (this._balance === undefined) {
			this._balance = this._element.querySelector("[ace-ref=\"balance\"]:not(:scope [is] *)")!;
		}
		return this._balance;
	}
	private _tradeResult?: HTMLSpanElement;
	get tradeResult() {
		if (this._tradeResult === undefined) {
			this._tradeResult = this._element.querySelector("[ace-ref=\"trade-result\"]:not(:scope [is] *)")!;
		}
		return this._tradeResult;
	}
	private _btnCancel?: HTMLButtonElement;
	get btnCancel() {
		if (this._btnCancel === undefined) {
			this._btnCancel = this._element.querySelector("[ace-ref=\"btn-cancel\"]:not(:scope [is] *)")!;
		}
		return this._btnCancel;
	}
}
export class FarmPoolWithdrawDialogAutogen extends HTMLDialogElement {
	readonly refs: FarmPoolWithdrawDialogRefs;
	constructor() {
		super();
		if (this.childElementCount == 0) {
			this.appendChild(
				(document.getElementById("ace-template-farm-pool-withdraw-dialog") as HTMLTemplateElement)
					.content
					.cloneNode(true)
			);
		}
		this.setAttribute("is", "farm-pool-withdraw-dialog"); // allow for easy query selecting
		this.refs = new FarmPoolWithdrawDialogRefs(this);
	}
	public static registerElement() {
		customElements.define("farm-pool-withdraw-dialog", this, { extends: "dialog"});
	}
}
export type FarmPoolDepositDialogFormCollection1 = HTMLFormControlsCollection & {
	"amount0": HTMLInputElement;
	namedItem(name: "amount0"): HTMLInputElement;
	"amount1": HTMLInputElement;
	namedItem(name: "amount1"): HTMLInputElement;
	"result": HTMLInputElement;
	namedItem(name: "result"): HTMLInputElement;
	"pool": HTMLInputElement;
	namedItem(name: "pool"): HTMLInputElement;
};
export type FarmPoolDepositDialogFormValues1 = {
	"amount0": number;
	"amount1": number;
	"result": number;
	"pool": string;
};
export type FarmPoolWithdrawDialogFormCollection2 = HTMLFormControlsCollection & {
	"amount": HTMLInputElement;
	namedItem(name: "amount"): HTMLInputElement;
	"pool": HTMLInputElement;
	namedItem(name: "pool"): HTMLInputElement;
};
export type FarmPoolWithdrawDialogFormValues2 = {
	"amount": number;
	"pool": string;
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
