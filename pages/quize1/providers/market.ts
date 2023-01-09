export interface TickersResponse {
  askPrice: string;
  bidPrice: string;
  closeTime: number;
  count: number;
  firstId: number;
  highPrice: string;
  lastId: number;
  lastPrice: string;
  lastQty: string;
  lowPrice: string;
  openPrice: string;
  openTime: number;
  prevClosePrice: string;
  priceChange: string;
  priceChangePercent: string;
  quoteVolume: string;
  symbol: string;
  volume: string;
  weightedAvgPrice: string;
}

export interface TickersResponseTransformed {
  askPrice: string;
  bidPrice: string;
  closeTime: number;
  count: number;
  firstId: number;
  highPrice: string;
  lastId: number;
  lastPrice: string;
  lastQty: string;
  lowPrice: string;
  openPrice: string;
  openTime: number;
  prevClosePrice: string;
  priceChange: string;
  priceChangePercent: string;
  quoteVolume: string;
  symbol: string;
  symbolTransformed: string;
  volume: string;
  weightedAvgPrice: string;
}

export const transformSymbol = (
  tickers: TickersResponse[]
): TickersResponseTransformed[] =>
  tickers.map((el) => ({
    ...el,
    lastPrice: Number(el.lastPrice).toLocaleString(),
    symbolTransformed: transformedTextSymbol(el.symbol),
  }));

const transformedTextSymbol = (symbol: string): string =>
  symbol.replace("_", "/").toUpperCase();
