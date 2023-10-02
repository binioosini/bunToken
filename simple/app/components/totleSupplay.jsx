'use client'

import React from 'react'
import { Metric, Card } from "@tremor/react";
import { useContract } from "@thirdweb-dev/react";


export default function TotleSupplay() {
  return (
    <Card className='flex justify-between m-8'>
     <Metric color="blue">
        Totle supplay is :
     </Metric>
    </Card>
  )
}