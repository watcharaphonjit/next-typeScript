import type { NextPage } from "next";
import Spinner from "../../components/Spinner";
import useFetchTickerStream from "./hooks/useFetchTickerStream";
import TableTickerStream from "./components/TableTickerStream";

import { tickerStreamState } from "../../store/tickerSlice";
import { useSelector } from "react-redux";

const Quize2: NextPage = () => {
  const tickerStream = useSelector(tickerStreamState);
  useFetchTickerStream();

  return (
    <>
      {!tickerStream ? (
        <Spinner />
      ) : (
        <TableTickerStream tickerStream={tickerStream} />
      )}
    </>
  );
};

export default Quize2;
