'use client'

import React, { useState, useEffect } from "react";
import { Card, Title, Text, Grid, Col, TextInput, Button } from "@tremor/react";
import { useContract, useAddress, useContractRead } from "@thirdweb-dev/react";

export default function Allowance() {
  const contractAddress = "0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C";
  const { contract } = useContract(contractAddress);
  const [spender, setSpender] = useState('');
  const owner = useAddress();
  
  const functionName = "allowance";
  
  const args = [owner, spender];
  
  const callOverrides = {
    blockTag: "latest",
  };

  const { data, isLoading } = useContractRead(contract, functionName, args, callOverrides);

  const handleSpenderChange = (event) => {
    setSpender(event.target.value);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setSpender(text);
    } catch (error) {
      console.error("Error pasting from clipboard:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, [spender, owner]);
  
  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto w-full">
            <Title>Allowance Dashboard</Title>
            <Text className="mb-4">To see the amount Allowance the spender can spend</Text>
            <TextInput
              name="recipient"
              required
              placeholder="Paste Spender wallet address"
              value={spender}
              onChange={handleSpenderChange}
            />
            <Button
              onClick={handlePaste}
              className="mt-4"
            >
              Paste Allowance addr
            </Button>
          </Card>
        </Col>
        {/* Display fetched data in a card */}
      {isLoading ? (
        <Card className="h-auto text-center">
          <Title>Loading...</Title>
        </Card>
      ) : (
        <Card className="h-auto text-center">
          <Title>Allowance Details</Title>
          <Text className="mt-4">{data.toString()} Bun Token</Text>
        </Card>
      )}
      </Grid>
    </main>
  );
}
