import React from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function TotalSupply() {
  const contractAddress = "0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C";
  const args = [];

  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "totalSupply", args);

  return (
    <div>
      {/* Display TotalSupply data in a card */}
      {isLoading ? (
        <Card className="h-auto text-center">
          <Title>Loading...</Title>
        </Card>
      ) : (
        <Card className="h-auto text-center">
          <Title>Total Supply</Title>
          <Text className="mt-4">{data.toString()} Bun Token</Text>
        </Card>
      )}
    </div>
  );
}
