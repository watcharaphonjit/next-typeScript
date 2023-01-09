import { TickerStreamWS } from "../providers/tickerStream";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableTickerStreamProps {
  tickerStream: TickerStreamWS[];
}

const TableTickerStream: React.FC<TableTickerStreamProps> = ({
  tickerStream,
}) => {
  const columns: ColumnsType<TickerStreamWS> = [
    {
      title: "Event time",
      dataIndex: "E",
      key: "E",
    },
    {
      title: "Close price",
      dataIndex: "c",
      key: "c",
    },
    {
      title: "Event type",
      dataIndex: "e",
      key: "e",
    },
    {
      title: "Highest price",
      dataIndex: "h",
      key: "h",
    },
    {
      title: "Lowest price",
      dataIndex: "l",
      key: "l",
    },
    {
      title: "Open price",
      dataIndex: "o",
      key: "o",
    },
    {
      title: "Total traded quote asset volume",
      dataIndex: "q",
      key: "q",
    },
    {
      title: "Symbol",
      dataIndex: "s",
      key: "s",
    },
    {
      title: "Total traded base asset volume",
      dataIndex: "v",
      key: "v",
    },
  ];

  const data: TickerStreamWS[] = tickerStream;

  return <Table columns={columns} dataSource={data} />;
};
export default TableTickerStream;
