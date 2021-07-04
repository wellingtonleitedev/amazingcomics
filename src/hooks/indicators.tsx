import React, {createContext, useContext} from 'react';
import {useState} from 'react';
import Modal, {ModalProps} from '../components/Modal';

interface IndicatorsContextData {
  setModal(props: ModalStateProps): void;
  setLoading(state: boolean): void;
  loading: boolean;
}

interface ModalStateProps extends ModalProps {
  open: boolean;
}

const IndicatorsContext = createContext<IndicatorsContextData>(
  {} as IndicatorsContextData,
);

const IndicatorsProvider: React.FC = ({children}) => {
  const [modal, setModal] = useState({} as ModalStateProps);
  const [loading, setLoading] = useState(false);

  return (
    <IndicatorsContext.Provider value={{setModal, setLoading, loading}}>
      {modal.open && <Modal title={modal.title} message={modal.message} />}
      {children}
    </IndicatorsContext.Provider>
  );
};

function useIndicators(): IndicatorsContextData {
  const context = useContext(IndicatorsContext);

  if (!context) {
    throw new Error('useIndicators must be used within an IndicatorsProvider');
  }

  return context;
}

export {IndicatorsProvider, useIndicators};
