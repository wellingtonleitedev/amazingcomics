import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  width: ${Dimensions.get('screen').width}px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin: auto;
`;

export const ErrorMessage = styled.Text`
  color: #0a0d1c;
  font-size: 26px;
  font-weight: bold;
`;
