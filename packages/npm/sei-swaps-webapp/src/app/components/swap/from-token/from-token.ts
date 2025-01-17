import { bigIntToStringDecimal, seiUtilEventEmitter, stringDecimalToBigInt, getDefaultNetworkConfig } from "@crownfi/sei-utils";
import { SwapFromComponentAutogen } from "./_autogen/from-token.js";
import { useGetBalance } from "../../../../hooks/use-get-balance.js";
import { DebouncedCallbacks } from "../../../../lib/debounced-callbacks.js";
import { useGetTokenInfo } from "../../../../hooks/use-get-token-info.js";

export type SwapFromTokenChangedAmountEventDetails = {
  denom: string;
  amount: bigint;
  isValid: boolean;
}

export type SwapFromTokenChangedAmountEvent = CustomEvent<SwapFromTokenChangedAmountEventDetails>;

declare global {
	interface GlobalEventHandlersEventMap {
		"swapFromTokenChangedAmount": SwapFromTokenChangedAmountEvent
	}
}

export class SwapFromTokenComponent extends SwapFromComponentAutogen {
  amount: bigint;
  percentage: number;
  decimals: number;
  balance: bigint;
  isValid: boolean;
  debouncedCallbacks: DebouncedCallbacks;

  constructor() {
    super();
    this.amount = BigInt(0);
    this.percentage = 0;
    this.decimals = 6;
    this.balance = BigInt(0);
    this.isValid = true;
    this.debouncedCallbacks = new DebouncedCallbacks();
  }

  updateBalanceText(value: bigint) {
    if (this.refs.balanceAmount)
      this.refs.balanceAmount.innerText = !!value && this.token ? bigIntToStringDecimal(value, this.decimals) : "0";
  }

  setLoadingBalance(isLoading: boolean) {
    if (isLoading) {
      this.refs.balanceAmount.innerText = "";
      this.refs.balanceAmount.classList.add("loading-spinner-inline");
    } else {
      this.updateBalanceText(this.balance);
      this.refs.balanceAmount.classList.remove("loading-spinner-inline");
    }
  }

  setDefaults() {
    this.refs.selectedAmount.value = "0";
    this.updateAmount("0");
  }

  setDisabled(isDisabled: boolean) {
    if (isDisabled) {
      this.refs.amountSlider.setAttribute("disabled", "");
      this.refs.selectedAmount.setAttribute("disabled", "");
      this.refs.dropdown.setAttribute("disabled", "");
      return;
    }
    this.refs.amountSlider.removeAttribute("disabled");
    this.refs.selectedAmount.removeAttribute("disabled");
    this.refs.dropdown.removeAttribute("disabled");
  }

  async refreshBalance() {
    if (!this.token) {
      this.updateBalanceText(BigInt(0));
      return;
    }
    this.decimals = (await useGetTokenInfo(this.token)).decimals;
    this.setLoadingBalance(true);
    const { raw } = await useGetBalance(this.token);
    this.balance = raw;
    this.setLoadingBalance(false);
  }

  updatePercentage(percentage: number) {
    if (!this.balance) 
      return;
    this.percentage = percentage;
    this.amount = (BigInt(this.percentage) * this.balance) / 100n;
    this.refs.currentPercentage.innerText = `${this.percentage}%`;
    this.refs.selectedAmount.value = bigIntToStringDecimal(this.amount, this.decimals, true);
    this.updateValidity();
  }

  updateValidity() {
    this.isValid = this.amount <= this.balance;
    if (!this.isValid)
      this.refs.selectedAmount.setCustomValidity("exceeds");
    else
      this.refs.selectedAmount.setCustomValidity("");
  }

  updateAmount(amount: string) {
    if (!this.balance) 
      return;
    const newAmount = stringDecimalToBigInt(amount, this.decimals);
    if (newAmount === null) {
      return;
    }
    this.amount = newAmount;
    const newPercentage = +bigIntToStringDecimal(this.amount * BigInt(100 * 10**this.decimals) / this.balance, this.decimals);
    this.percentage = newPercentage;
    const exceedsMax = this.percentage > 100;
    const percentageValue = exceedsMax ? "100" : this.percentage.toFixed(2);
    this.refs.currentPercentage.innerText = `${exceedsMax ? "> 100" : this.percentage.toFixed(2)}%`;
    this.refs.amountSlider.value = percentageValue;
    this.refs.amountSlider.style.setProperty(
      '--range-workaround-fill-amount',
      +percentageValue / 100 + ""
    );
    this.updateValidity();
  }

  async onTokenChanged() {
    if (!this.token)
      return;
    this.refs.dropdown.setAttribute("selected", this.token);
    this.decimals = (await useGetTokenInfo(this.token)).decimals;
    await this.refreshBalance();
  }

  onTokensChanged() {
    if (!this.tokens)
      return;
    this.refs.dropdown.setAttribute("options", this.tokens);
  }

  dispatchChangedEvent() {
    const debouncedDispatch = this.debouncedCallbacks.debounce((el: this, denom: string, amount: bigint, isValid: boolean) => {
      el.dispatchEvent(new CustomEvent("swapFromTokenChangedAmount", { 
        detail: {
          denom,
          amount,
          isValid,
        },
        bubbles: true,
      }));
    });
    if (this.token)
      debouncedDispatch(this, this.token, this.amount, this.isValid);
  }

  connectedCallback() {
    this.refs.amountSlider.addEventListener("input", ev => {
      const percentage = +((ev.target as HTMLInputElement)?.value || "0");
      this.updatePercentage(percentage);
      this.dispatchChangedEvent();
    });

    this.refs.amountSlider.addEventListener("change", ev => {
      const percentage = +((ev.target as HTMLInputElement)?.value || "0");
      this.updatePercentage(percentage);
      this.dispatchChangedEvent();
    });

    this.refs.selectedAmount.addEventListener("input", ev => {
      this.updateAmount((ev.target as HTMLInputElement)?.value || "0");
      this.dispatchChangedEvent();
    });

    this.refs.selectedAmount.addEventListener("change", ev => {
      this.updateAmount((ev.target as HTMLInputElement)?.value || "0");
      this.dispatchChangedEvent();
    });

    seiUtilEventEmitter.on("defaultProviderChanged", () => {
      this.refreshBalance();
    });
  }
}

SwapFromTokenComponent.registerElement();