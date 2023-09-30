'use client'

import React, { useState } from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";
import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";

export default function Approve() {
  const { contract } = useContract("0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C");
  const { mutateAsync: approve } = useContractWrite(contract, "approve");
  
  const [amount, setAmount] = useState('');
  const spender = useAddress();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const tx = await approve({ args: [spender, amount] });

      console.log("approve transaction hash:", tx.hash);
    } catch (error) {
      
      console.error("approve failed:", error);
    }
  };

  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto">
            <Title>Approve Dashboard</Title>
            <Text className="mb-4">Approve the amount you want</Text>
            <NumberInput 
              placeholder="ETH 100"
              value={amount}
              onChange={handleAmountChange}
            />
            <Button 
            onClick={handleSubmit}
            className="mt-4"
            >
              Approve
            </Button>
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card>
              <div className="h-24" />
            </Card>
            <Card>
              <div className="h-24" />
            </Card>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
