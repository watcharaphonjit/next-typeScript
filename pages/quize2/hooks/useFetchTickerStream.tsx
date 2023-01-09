import { useDispatch } from "react-redux";
import { setTickerStreamState } from "../../../store/tickerSlice";
import { useEffect } from "react";

const useFetchTickerStream = () => {
  const dispatch = useDispatch();
  const connectWebSocket = () => {
    return new Promise(function (resolve, reject) {
      var ws = new WebSocket(
        "wss://ws.satangcorp.com/ws/!miniTicker@arr@3000ms"
      );
      ws.onopen = function () {
        resolve(ws);
      };
      ws.onerror = function (err) {
        reject(err);
      };
      ws.onclose = function (evt) {
        console.log("CLOSE SOCKET", new Date().toLocaleString());
      };
      ws.onmessage = function (evt) {
        dispatch(setTickerStreamState(sortByKey(JSON.parse(evt.data), "s")));
      };
    });
  };

  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  useEffect(() => {
    connectWebSocket();
  }, []);
};
export default useFetchTickerStream;
