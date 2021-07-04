import React from 'react';
import {CharactersProvider} from './characters';
import {IndicatorsProvider} from './indicators';

const AppProvider: React.FC = ({children}) => (
  <IndicatorsProvider>
    <CharactersProvider>{children}</CharactersProvider>
  </IndicatorsProvider>
);

export default AppProvider;
