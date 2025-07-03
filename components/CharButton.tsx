import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

const CharButton = ({
  children,
  onPress,
  color,
  style,
}: {
  children: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  color: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: color,
          paddingVertical: 5,
          borderRadius: 15,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "#131B23",
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={{
          fontSize: 50,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CharButton;
