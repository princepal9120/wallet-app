import React from "react";
import { View, Text } from "react-native";
import { trpc } from "../utils/trpc";

export const TransactionList = ({ walletId }: { walletId: number }) => {
  const { data } = trpc.createTransaction.useMutation();

  return <Text>Transactions will load here...</Text>;
};
