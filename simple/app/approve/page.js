"use client";

import React, { useState } from "react";
import {
  Card,
  Title,
  Text,
  Grid,
  Col,
  NumberInput,
  TextInput,
  Button,
} from "@tremor/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import TotalSupply from "../components/totalSupply";


export default function Approve() {
  const { contract } = useContract(
    "0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C"
  );
  const { mutateAsync: approve } = useContractWrite(contract, "approve");

  const [amount, setAmount] = useState("");
  const [spender, setSpender] = useState("");

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    setAmount(inputValue);
    if (inputValue !== "" && parseFloat(inputValue) === 0) {
      setAmount("1");
    } else {
      setAmount(inputValue);
    }
  };

  const handleSpenderChange = (event) => {
    setSpender(event.target.value);
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
          <Card className="h-auto w-auto">
            <Title>Approve Dashboard</Title>
            <Text className="mb-4">Approve the amount you want</Text>
            <form onSubmit={handleSubmit}>
            <NumberInput
              placeholder="ETH 100"
              value={amount}
              onChange={handleAmountChange}
            />
            <TextInput
              placeholder="Wallet address"
              value={spender}
              onChange={handleSpenderChange}
              className="mt-4"
            />
            <Button 
            type="submit"
            className="mt-4">
              Approve
            </Button>
            </form>
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
