import { useEffect, useState } from "react";
import { axiosInstance } from "../../../service";
import { transformSymbol } from "../providers/market";
import { useDispatch } from "react-redux";
import {
  setTickerList,
  setLoading,
  setError,
} from "../../../store/tickerSlice";
import { TickersResponse } from "../providers/market";

const useFetchTicker = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0);

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get<TickersResponse[]>(
        "/v3/ticker/24hr"
      );
      const dataTransformed = transformSymbol(data);
      dispatch(setTickerList(dataTransformed));
    } catch (err) {
      dispatch(setError(err.message));
      setError(err.message);
    }
  };

  const fetchDataFirstTime = async () => {
    await dispatch(setLoading(true));
    await fetchData();
    await dispatch(setLoading(false));
  };

  useEffect(() => {
    const id = setInterval(() => {
      fetchData();
      setCheck(check + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [check]);

  useEffect(() => {
    fetchDataFirstTime();
  }, []);
};

export default useFetchTicker;
