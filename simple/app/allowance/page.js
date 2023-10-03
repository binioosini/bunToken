"use client";

import React, { useState } from "react";
import {
  Card,
  Title,
  Text,
  Grid,
  Col,
  TextInput,
  Button,
} from "@tremor/react";
import {
  useAddress,
} from "@thirdweb-dev/react";
import TotalSupply from "../components/totalSupply";
import Allowance from "../components/allowance";

export default function AllowancePage() {
  
  const [spender, setSpender] = useState("");
  const owner = useAddress();

  const handleSpenderChange = (event) => {
    setSpender(event.target.value);
  };
  
  const handlePaste = async () => {
    try {
      const addr = await navigator.clipboard.readText();
      setSpender(addr)
    } catch (error) {
      console.error("Error pasting from clipboard:", error);
    }
  };
  
  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto w-auto">
            <Title>Allowance Dashboard</Title>
            <Text className="mb-4">See The Allowance Of an Addr</Text>
            
          <Card >
          {
            spender && (
              <div className="space-y-6 mb-4">
                
                  <Text className="mb-4">
                    <Allowance owner={owner} spender={spender} />
                  </Text>
                
              </div>
            )
          }
          </Card>
          
              <TextInput
                placeholder="Wallet address"
                value={spender}
                onChange={handleSpenderChange}
                className="mt-4"
              />
              <Button onClick={handlePaste} className="mt-4">
                Paste Addr
              </Button>
            
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6 mb-4">           
            <Card>
              <TotalSupply />
            </Card>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
