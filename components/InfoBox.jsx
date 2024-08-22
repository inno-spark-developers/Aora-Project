import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const InfoBox = ({
  title,
  subtitle,
  onPress,
  spanStyles,
  spanTitle,
  containerStyles,
  titleStyles,
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={containerStyles}>
      <Text className={`relative text-white text-center font-psemibold ${titleStyles}`}>
        {title}
        <Text className={spanStyles}>{spanTitle}</Text>
      </Text>
      <Text className={`text-gray-100 text-center text-sm font-psemibold`}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
};

export default InfoBox;
