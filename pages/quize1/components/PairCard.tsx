import { Button } from "antd";
import React from "react";

interface PropsPareCard {
  symbol: string;
  selectedTicker: string;
  symbolTransformed: string;
  onClickCard: (symbol: string) => void;
}

const PairCard: React.FC<PropsPareCard> = ({
  selectedTicker,
  symbol,
  symbolTransformed,
  onClickCard,
}) => {
  return (
    <Button
      type={selectedTicker === symbol ? "primary" : "default"}
      onClick={() => onClickCard(symbol)}
      className="text-center"
    >
      {symbolTransformed}
    </Button>
  );
};

export default PairCard;
