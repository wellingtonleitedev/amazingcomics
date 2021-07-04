import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #ec1d24;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
`;

export const Thumbnail = styled.Image`
  align-self: center;
  border-color: #fefefe;
  border-width: 2px;
  height: 100px;
  margin-bottom: 10px;
  width: 100px;
`;

export const CharacterTitle = styled.Text`
  color: #fefefe;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const CharacterDescription = styled.Text`
  color: #fefefe;
`;
