'use client'

import { Card, Title, Text, Grid, Col, NumberInput, Button } from "@tremor/react";

export default function Example() {
  return (
    <main>
      <Grid numItemsLg={6} className="gap-6 m-8">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-auto">
            <div className="h-60">
            <Title>Mint Dashboard</Title>
            <Text>Mint the Mount you want</Text>
            <NumberInput error={false} errorMessage="Number out of bounds" />
            <Button >
              transfer From
            </Button>
            </div>
          </Card>
        </Col>

        {/* sidebar */}
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