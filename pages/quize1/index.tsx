import type { NextPage } from "next";

import useFetchTicker from "./hooks/useFetchTicker";
import PairCard from "./components/PairCard";
import Spinner from "../../components/Spinner";
import PricingCard from "./components/PricingCard";
import { TickersResponseTransformed } from "./providers/market";
import {
  selectTickerState,
  loading,
  setTickerState,
  tickerList,
} from "../../store/tickerSlice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Market: NextPage = () => {
  const tickerListState = useSelector(tickerList);
  const selectedTicker = useSelector(selectTickerState);
  const loadingState = useSelector(loading);
  useFetchTicker();

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
    const ticker = tickerListState?.find((el) => el.symbol === selectedTicker);
    setCurrentTicker(ticker);
  };

  return (
    <>
      {loadingState ? (
        <Spinner />
      ) : (
        <div className="container-pair">
          <div className="container-pair-card">
            {tickerListState?.map(
              (el: TickersResponseTransformed, idx: number) => (
                <PairCard
                  selectedTicker={selectedTicker}
                  onClickCard={handleSelectTicker}
                  key={idx}
                  symbolTransformed={el.symbolTransformed}
                  symbol={el.symbol}
                />
              )
            )}
          </div>
          <PricingCard ticker={currentTicker} />
        </div>
      )}
    </>
  );
};

export default Market;
