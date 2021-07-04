import React from 'react';
import {Modal as NativeModal, Text, View} from 'react-native';
import {useIndicators} from '../../hooks/indicators';
import {Container, Content, Button, ErrorTitle, ButtonText} from './styles';

export interface ModalProps {
  title?: string;
  message?: string;
}

const Modal: React.FC<ModalProps> = ({
  title = 'Request Failed',
  message = 'An error has occurred',
}) => {
  const {setModal} = useIndicators();

  return (
    <NativeModal testID="modal" transparent>
      <Container>
        <Content>
          <View>
            <ErrorTitle>{title}</ErrorTitle>
            <Text>{message}</Text>
          </View>

          <Button testID="button" onPress={() => setModal({open: false})}>
            <ButtonText>OK</ButtonText>
          </Button>
        </Content>
      </Container>
    </NativeModal>
  );
};

export default Modal;
