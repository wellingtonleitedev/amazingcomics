import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.View`
  background-color: #fefefe;
  border-radius: 8px;
  flex: 0.3;
  justify-content: space-between;
  padding: 20px;
`;

export const ErrorTitle = styled.Text`
  color: #0a0d1c;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.Text`
  color: #e4e2e9;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: red;
  border-radius: 8px;
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  color: #fefefe;
  font-weight: bold;
`;
