import React from 'react';
import {ActivityIndicatorProps} from 'react-native';
import {useIndicators} from '../../hooks/indicators';
import {ActivityIndicator, Container, ErrorMessage} from './styles';

interface LoadingProps extends ActivityIndicatorProps {}

const Loading: React.FC<LoadingProps> = ({...rest}) => {
  const {loading} = useIndicators();

  return (
    <Container testID="loading">
      {loading ? (
        <ActivityIndicator
          {...rest}
          color="#0a0d1c"
          size={80}
          hidesWhenStopped
        />
      ) : (
        <ErrorMessage>No records!</ErrorMessage>
      )}
    </Container>
  );
};

export default Loading;
