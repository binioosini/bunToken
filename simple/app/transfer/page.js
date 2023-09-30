'use client'

import React, { useState } from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Transfer() {
  const { contract } = useContract("0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C");
  const { mutateAsync: transfer } = useContractWrite(contract, "transfer");
  
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const tx = await transfer({ args: [recipient, amount] });
      console.log("transfer transaction hash:", tx.hash);
    } catch (error) {
      console.error("transfer failed:", error);
    }
  };

  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto">
            <Title>Transfer Dashboard</Title>
            <Text className="mb-4">Transfer the amount you want</Text>
            <NumberInput 
              name="amount"
              required
              placeholder="ETH 100"
              value={amount}
              onChange={handleAmountChange}
            />
            <NumberInput enableStepper={false}
              name="recipient"
              required
              placeholder="wallet address"
              value={recipient}
              onChange={handleRecipientChange}
              className="mt-4"
            />
            <Button 
              onClick={handleSubmit} 
              className="mt-4"
            >
              Transfer
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
