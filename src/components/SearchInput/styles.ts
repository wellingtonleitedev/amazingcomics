import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  align-items: center;
  background-color: #fefefe;
  border-radius: 8px;
  flex-direction: row;
  margin: 20px 20px 0;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  background-color: #ec1d24;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100%;
  flex-direction: row;
  padding: 5px;
`;

export const Icon = styled(FeatherIcon)`
  font-weight: bold;
`;

export const Input = styled.TextInput`
  color: #0a0d1c;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
`;
