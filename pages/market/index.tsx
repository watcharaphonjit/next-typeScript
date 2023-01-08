import type { NextPage } from "next";

import useFetchTicker from "./hooks/useFetchTicker";
import PairCard from "./components/PairCard";
import PricingCard from "./components/PricingCard";
import { TickersResponseTransformed } from "./providers/market";
import { selectTickerState, setTickerState } from "../../store/tickerSlice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";

interface MarketProps {
  tickers: TickersResponseTransformed[];
}

const Market: NextPage<MarketProps> = ({ tickers }) => {
  const selectedTicker = useSelector(selectTickerState);
  const dispatch = useDispatch();
  const [currentTicker, setCurrentTicker] =
    useState<TickersResponseTransformed>(null);

  useEffect(() => {
    findSelectedTicker();
  }, [selectedTicker]);

  const handleSelectTicker = (symbol: string) => {
    dispatch(setTickerState(symbol));
  };

  const findSelectedTicker = () => {
    const ticker = tickers.find((el) => el.symbol === selectedTicker);
    setCurrentTicker(ticker);
  };

  return (
    <>
      <div className="container-pair">
        <div className="container-pair-card">
          {tickers?.map((el: TickersResponseTransformed, idx: number) => (
            <PairCard
              selectedTicker={selectedTicker}
              onClickCard={handleSelectTicker}
              key={idx}
              symbolTransformed={el.symbolTransformed}
              symbol={el.symbol}
            />
          ))}
        </div>
        <PricingCard ticker={currentTicker} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await useFetchTicker();
  return {
    props: {
      tickers: data,
    },
    revalidate: 5,
  };
}

export default Market;
