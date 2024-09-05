import { SwapMarketPair, UnifiedDenom } from "@crownfi/sei-swaps-sdk";
import { seiUtilEventEmitter } from "@crownfi/sei-utils";

import { swapService } from "../../index.js";
import { EmptySeparatorAutogen, FarmComponentAutogen, FilterSeparatorAutogen } from "./_autogen/farm.js";
import { PoolItemComponent } from "./pool-item/pool-item.js";
import { SortBy } from "../exports.js";
import { useGetBalance } from "../../../hooks/use-get-balance.js";
import { DebouncedCallbacks } from "../../../lib/debounced-callbacks.js";

type ShareBalances = {
  [key: UnifiedDenom]: bigint;
};

export class FarmComponent extends FarmComponentAutogen {
  sortBy: SortBy = "alphabetical";
  search: string;
  poolPairs: SwapMarketPair[];
  sharesBalances: ShareBalances;
  debouncedCallbacks: DebouncedCallbacks;

  constructor() {
    super();
    this.search = "";
    this.poolPairs = [];
    this.sharesBalances = {};
    this.debouncedCallbacks = new DebouncedCallbacks();
  }

  async refreshPoolPairs() {
    this.poolPairs = await swapService.getPairs();
    this.sharesBalances = Object.fromEntries(
      await Promise.all(this.poolPairs.map(async (pair) => [pair.name, (await useGetBalance(pair.sharesDenom)).raw]))
    );
  }

  getFilteredList(list: SwapMarketPair[]) {
    if (this.search === "")
      return [...list];
  
    const searchTerms = this.search.split(" ");

    const hasTerm = (term: string, pair: SwapMarketPair) => pair.name.toLowerCase().includes(term.toLowerCase());
    const checkFn = searchTerms.length > 1 ? "every" : "some";

    return list.filter(pair => searchTerms[checkFn](term => hasTerm(term, pair)));
  }

  getSortedList(sort: SortBy, list: SwapMarketPair[]) {
    const tmp = [...list];
    
    const sumDeposits = (pair: SwapMarketPair) => pair.totalDeposits[0] + pair.totalDeposits[1];
    const getShareBalance = (pair: SwapMarketPair) => this.sharesBalances[pair.name];
    const getFees = (pair: SwapMarketPair) => pair.totalFeeBasisPoints;

    const sortFn = {
      "alphabetical": (curr: SwapMarketPair, next: SwapMarketPair) => curr.name > next.name ? 1 : -1,
      "tvd": (curr: SwapMarketPair, next: SwapMarketPair) => sumDeposits(curr) > sumDeposits(next) ? -1 : 1,
      "uvd": (curr: SwapMarketPair, next: SwapMarketPair) => getShareBalance(curr) > getShareBalance(next) ? -1 : 1,
      "apy": (curr: SwapMarketPair, next: SwapMarketPair) => getFees(curr) > getFees(next) ? 1 : -1,
      "fees": (curr: SwapMarketPair, next: SwapMarketPair) => getFees(curr) > getFees(next) ? 1 : -1,
    }[sort];

    tmp.sort(sortFn);

    return tmp;
  }

  renderList() {
    this.refs.poolsList.innerHTML = "";
    const filteredList = this.getFilteredList(this.poolPairs);
    const sortedList = this.getSortedList(this.sortBy, filteredList);

    for (const pair of sortedList) {
      this.refs.poolsList.appendChild(new EmptySeparatorAutogen());
      this.refs.poolsList.appendChild(new PoolItemComponent(pair));
    }
  }

  handleSearch(search: string) {
    if (search === this.search)
      return;
    this.search = search;
    const debouncedSearch = this.debouncedCallbacks.debounce(() => {
      this.renderList();
    });
    debouncedSearch();
  }

  async connectedCallback() {
    this.refs.sortBy.setAttribute("default", this.sortBy);
    await this.refreshPoolPairs();
    this.renderList();

    this.addEventListener("sortByEvent", ev => {
      ev.stopPropagation();
      this.sortBy = ev.detail.sortBy;
      this.renderList();
    });

    this.refs.searchInput.addEventListener("change", ev => {
      this.handleSearch((ev.target as HTMLInputElement).value);
    });

    this.refs.searchInput.addEventListener("input", ev => {
      this.handleSearch((ev.target as HTMLInputElement).value);
    });
  }
}

EmptySeparatorAutogen.registerElement();
FilterSeparatorAutogen.registerElement();
FarmComponent.registerElement();