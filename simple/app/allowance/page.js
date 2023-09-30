'use client'

import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";

export default function Allowance() {
  const { contract } = useContract("0x2aCB1B60BAc2d25144BaF254830E1cA203A9B75C");
  const [spender, setSpender] = useState('');
  const [data, setData] = useState('');
  const owner = useAddress();

  const handleSpenderChange = (event) => {
    setSpender(event.target.value);
  };

  const fetchData = async () => {
    try {
      const allowance = await useContractRead(contract, "allowance", [owner, spender]);
      setData(allowance.toString());
      console.log("Data fetched successfully:", allowance.toString());
    } catch (error) {
      console.error("Data fetch failed:", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts or when spender or owner changes
    fetchData();
  }, [spender, owner]);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Data fetching logic is moved to fetchData function
  };

  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto">
            <Title>Allowance Dashboard</Title>
            <Text className="mb-4">To see the amount Allowance the spender to spend</Text>
            <NumberInput enableStepper={false}
              name="recipient"
              required
              placeholder="wallet address"
              value={spender}
              onChange={handleSpenderChange}
            />
            <Button 
              onClick={fetchData} // Trigger data fetch when the button is clicked
              className="mt-4"
            >
             See Allowance
            </Button>
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card>
              <div>{data}</div>
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
