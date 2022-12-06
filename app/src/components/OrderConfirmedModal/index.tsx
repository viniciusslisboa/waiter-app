import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <>
      { visible && <StatusBar style='light' backgroundColor='#d73035' />}
      <Modal
        visible={visible}
        animationType='fade'
      >
        <Container>
          <CheckCircle />
          <Text weight='600' size={20} color='#fff' style={{ marginTop: 12, marginBottom: 4 }}>Pedido confirmado</Text>
          <Text opacity={0.9} color='#fff'>O pedido já entrou na fila de produção!</Text>

          <OkButton onPress={onOk}>
            <Text weight='600' color='#d73035'>OK</Text>
          </OkButton>
        </Container>
      </Modal>
    </>

  );
}
