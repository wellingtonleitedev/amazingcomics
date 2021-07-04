import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: transparent;
  flex: 1;
  width: ${Dimensions.get('screen').width}px;
`;

export const HeaderTitle = styled.Text`
  color: #0a0d1c;
  font-size: 26px;
  font-weight: bold;
  padding: 10px 20px;

  text-shadow: 1px 1px 1px #fefefe;
`;

export const ComicContainer = styled.View`
  align-items: flex-start;
  background-color: #fefefe;

  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border-top-width: 0;
  border-width: 1px;
  elevation: 1;

  flex-direction: row;
  margin: 10px 20px;
  padding: 5px;
`;

export const ComicImage = styled.Image`
  height: 156px;
  width: 100px;
`;

export const ComicDescription = styled.View`
  flex: 1;
  padding: 0 10px;
  position: relative;
  height: 100%;
`;

export const ComicTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 18px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;

export const Info = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 5px;
`;

export const Span = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Prices = styled.View`
  bottom: 0;
  position: absolute;
  left: 10px;
`;
