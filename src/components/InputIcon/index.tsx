import React from 'react';
import {GestureResponderEvent, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input} from './styles';

interface InputIconProps extends TextInputProps {
  icon: string;
  iconColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const InputIcon: React.FC<InputIconProps> = ({
  icon,
  iconColor,
  onPress,
  ...rest
}) => {
  return (
    <>
      <Icon
        testID="icon"
        name={icon}
        size={30}
        color={iconColor}
        onPress={onPress}
      />
      <Input testID="input" {...rest} />
    </>
  );
};

export default InputIcon;
