import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex-direction: column;
  width: ${Dimensions.get('screen').width}px;
`;
