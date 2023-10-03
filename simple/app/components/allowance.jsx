import React from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Allowance({owner, spender}) {
  const contractAddress = "0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C";
  const args = [owner, spender];

  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "allowance", args);

  return (
    <div>
      {/* Display allowance data in a card */}
      {isLoading ? (
        <Card className="h-auto text-center">
          <Title>Loading...</Title>
        </Card>
      ) : (
        <Card className="h-auto text-center">
          <Title>Addr Allowance</Title>
          <Text className="mt-4">{data.toString()} Bun Token</Text>
        </Card>
      )}
    </div>
  );
}
