import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const HeaderTitle = styled.Text`
  color: #0a0d1c;
  font-size: 26px;
  font-weight: bold;
  padding: 10px 20px;

  text-shadow: 1px 1px 1px #fefefe;
`;

export const HeroList = styled(FlatList as new () => FlatList)`
  flex: 1;
  margin: 0 10px;
`;

export const Card = styled.TouchableOpacity`
  align-items: center;
  align-self: flex-start;
  background-color: #fefefe;

  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border-right-width: 1px;
  elevation: 1;

  justify-content: center;
  height: 145px;
  width: 145px;
  margin: 10px 5px;
`;

export const HeroImage = styled.Image`
  border-radius: 8px;
  height: 106px;
  width: 106px;
`;

export const HeroName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
