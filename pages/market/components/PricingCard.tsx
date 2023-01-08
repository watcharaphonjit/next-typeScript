import React from "react";
import { TickersResponseTransformed } from "../providers/market";
import { Card } from "antd";
import { Typography } from "antd";

const { Text, Title } = Typography;

interface PropsPricingCard {
  ticker: TickersResponseTransformed;
}

const PricingCard: React.FC<PropsPricingCard> = ({ ticker }) => {
  console.log(ticker);
  return (
    <Card>
      {ticker ? (
        <>
          <p>{ticker?.symbolTransformed}</p>
          <Title level={4} style={{ margin: 0 }}>
            {ticker?.lastPrice}
          </Title>
          <Text type="secondary">Volume: {ticker?.volume}</Text>
        </>
      ) : (
        <Title level={4} style={{ margin: 0 }}>
          Please Select Pair
        </Title>
      )}
    </Card>
  );
};

export default PricingCard;
