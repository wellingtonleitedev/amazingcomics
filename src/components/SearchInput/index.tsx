import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, ContainerIcon, Icon, Input} from './styles';

interface SearchInputProps extends TextInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({...rest}) => {
  return (
    <Container>
      <ContainerIcon>
        <Icon testID="search-icon" name="search" size={30} color="#FEFEFE" />
      </ContainerIcon>
      <Input testID="search-input" {...rest} />
    </Container>
  );
};

export default SearchInput;
