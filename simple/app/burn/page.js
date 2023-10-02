'use client'

import React, { useState } from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import TotalSupply from "../components/totalSupply";


export default function Burn() {
  const { contract } = useContract("0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C");
  const { mutateAsync: burn } = useContractWrite(contract, "burn");
  
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    setAmount(inputValue);
    if (inputValue !== "" && parseFloat(inputValue) === 0) {
      // If the value is zero, set it to a non-zero value
      setAmount("1"); 
    } else {
      setAmount(inputValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const tx = await burn({ args: [amount] });

      console.log("Mint transaction hash:", tx.hash);
    } catch (error) {
      
      console.error("Minting failed:", error);
    }
  };

  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto">
            <Title>Burn Dashboard</Title>
            <Text className="mb-4">Burn the amount you want</Text>
            <NumberInput 
              placeholder="ETH 100"
              value={amount}
              onChange={handleAmountChange}
            />
            <Button 
            onClick={handleSubmit}
            className="mt-4"
            >
             Burn
            </Button>
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card>
              <TotalSupply />
            </Card>
          </div>
        </Col>

      </Grid>
    </main>
  );
}
