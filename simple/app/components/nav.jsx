'use client'

import React from 'react'
import Link from "next/link";
import { Metric } from "@tremor/react";
import { ConnectWallet } from "@thirdweb-dev/react";


function Nav() {
  return (
    <div className='flex justify-between m-8'>
     <Metric color="blue">
        <Link href='/'>
        Bun Token
        </Link>
     </Metric>
    <ConnectWallet />
    </div>
  )
}

export default Nav