import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';


export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const IconContainer = styled.View`
  background: #fff;
  width: 44px;
  height: 44px;
  margin-bottom: 8px;
  border-radius: 22px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 0.9 : 0.1});
  elevation: 2;

  justify-content: center;
  align-items: center;
`;
