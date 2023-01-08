import { axiosInstance } from "../../../service";
import {
  TickersResponse,
  TickersResponseTransformed,
} from "../providers/market";

const useFetchTicker = async (): Promise<TickersResponseTransformed[]> => {
  const { data } = await axiosInstance.get<TickersResponse[]>(
    "/v3/ticker/24hr"
  );
  const dataTransformed = transformSymbol(data);

  return dataTransformed;
};

const transformedTextSymbol = (symbol: string): string =>
  symbol.replace("_", "/").toUpperCase();

const transformSymbol = (
  tickers: TickersResponse[]
): TickersResponseTransformed[] =>
  tickers.map((el) => ({
    ...el,
    lastPrice: Number(el.lastPrice).toLocaleString(),
    symbolTransformed: transformedTextSymbol(el.symbol),
  }));
export default useFetchTicker;
