import React from "react";
import { View, Text } from "react-native";
import { trpc } from "../utils/trpc";

export const WalletBalance = ({ username }: { username: string }) => {
  const { data } = trpc.getUser.useQuery({ username });

  return (
    <View>
      <Text>Balance: ${data?.wallet?.balance ?? 0}</Text>
    </View>
  );
};
