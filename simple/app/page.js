"use client"
import Link from "next/link";
import { Card, Text, Button, Icon, Flex, Title, Grid } from "@tremor/react";
import { useAddress } from "@thirdweb-dev/react";
import {
  ListPlus,
  BadgeCheck,
  Vote,
  Flame,
  MoveRight
} from "lucide-react"

const categories = [
  {
    title: "Mint",
    text: `Mint your Amount of Bun Token`,
    icon: ListPlus,
    link: '/mint'
  },
  {
    title: "Burn",
    text: `Burn your Amount of Bun Token`,
    icon: Flame,
    link: '/burn'
  },
  {
    title: "Approve",
    text: `add acount to spend your Bun Token behalf on you`,
    icon: BadgeCheck,
    link: '/approve'
  },
  {
    title: "Allowance",
    text: `Check accuont to know how much token he can spend`,
    icon: Vote,
    link: '/allowance'
  },
];

export default function Home() {
  const address = useAddress();

  if(!address) {
    return (
      <Card>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Title>Please Connect a Wallet</Title>
        </Flex>
      </Card>
    )
  }

  return (
    <Grid numItemsSm={2} className="gap-6 m-8">
      {categories.map((item) => (
        <Card key={item.title}>
          <Icon variant="light" icon={item.icon} size="lg" color="blue" />
          <Title className="mt-6">{item.title}</Title>
          <Text className="mt-2">{item.text}</Text>
          <Flex className="mt-6 pt-4 border-t">
            <Button size="xs" variant="light" icon={MoveRight} iconPosition="right">
            <Link href={item.link}>View More</Link>
            </Button>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}